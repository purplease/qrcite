import os
import re
import requests
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

def download_image(url, filepath):
    response = requests.get(url)
    if response.status_code == 200:
        with open(filepath, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded: {url} to {filepath}")
    else:
        print(f"Failed to download {url}. Status code: {response.status_code}")

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    cdn_pattern = r'https://cdn\.builder\.io/api/v1/image/assets/[^\s"\')\]]+(?:\?[^\s"\')\]]*)?' 
    matches = re.findall(cdn_pattern, content)

    if matches:
        print(f"Found {len(matches)} cdn.builder.io links in {file_path}")
        for url in matches:
            filename = os.path.basename(url.split('?')[0])
            new_path = f'/images/{filename}'
            full_path = os.path.join('public', new_path)

            if not os.path.exists(full_path):
                try:
                    os.makedirs(os.path.dirname(full_path), exist_ok=True)
                    download_image(url, full_path)
                except OSError as e:
                    if e.errno == 30:  # Read-only file system
                        print(f"Warning: Unable to create directory or download image due to read-only file system. Skipping: {full_path}")
                        continue
                    else:
                        raise

            content = content.replace(url, new_path)
            print(f"Processed link: {url} -> {new_path}")

        try:
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"Updated file: {file_path}")
        except OSError as e:
            if e.errno == 30:  # Read-only file system
                print(f"Warning: Unable to update file due to read-only file system: {file_path}")
            else:
                raise
    else:
        print(f"No cdn.builder.io links found in {file_path}")

def main():
    components_dir = Path('src/components')
    if not components_dir.exists():
        print(f"Directory {components_dir} does not exist.")
        return

    files = list(components_dir.glob('**/*.tsx'))
    print(f"Found {len(files)} files to process")

    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = [executor.submit(process_file, str(file)) for file in files]
        for future in as_completed(futures):
            try:
                future.result()
            except Exception as e:
                print(f"An error occurred: {e}")

    print("All files processed successfully.")

if __name__ == "__main__":
    main()
