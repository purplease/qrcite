import os
import re
import requests
from pathlib import Path
from PIL import Image
import io

def is_svg(file_content):
    return file_content.strip().startswith(b'<?xml') or file_content.strip().startswith(b'<svg')

def download_image(url, filepath):
    response = requests.get(url)
    if response.status_code == 200:
        content = response.content
        
        if is_svg(content):
            # If it's an SVG, save it directly
            with open(f"{filepath}.svg", 'wb') as f:
                f.write(content)
            print(f"Downloaded SVG: {url} to {filepath}.svg")
            return f"{filepath}.svg"
        else:
            # For other image types
            try:
                img = Image.open(io.BytesIO(content))
                img_format = img.format.lower() if img.format else 'png'
                new_filepath = f"{filepath}.{img_format}"
                img.save(new_filepath, format=img_format)
                print(f"Downloaded and saved image: {url} to {new_filepath}")
                return new_filepath
            except Exception as e:
                print(f"Error processing image: {e}")
                # If we can't process it, save the raw content
                with open(filepath, 'wb') as f:
                    f.write(content)
                print(f"Saved raw content: {url} to {filepath}")
                return filepath
    else:
        print(f"Failed to download {url}. Status code: {response.status_code}")
        return None

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
            full_path = os.path.join(os.getcwd(), 'public', new_path.lstrip('/'))

            if not os.path.exists(full_path):
                try:
                    os.makedirs(os.path.dirname(full_path), exist_ok=True)
                    new_full_path = download_image(url, full_path)
                    if new_full_path:
                        new_path = f'/images/{os.path.basename(new_full_path)}'
                except OSError as e:
                    if e.errno == 30:  # Read-only file system
                        print(f"Warning: Unable to create directory or download image due to read-only file system. Skipping: {full_path}")
                        continue
                    else:
                        raise

            content = content.replace(url, f'resolveURL("{new_path}")')
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

    for file in files:
        try:
            process_file(str(file))
        except Exception as e:
            print(f"An error occurred while processing {file}: {e}")

    print("All files processed successfully.")

if __name__ == "__main__":
    main()
