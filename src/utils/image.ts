export default function resolveURL(url: string) {
  const baseURL = import.meta.env.VITE_BASE_URL || "/";
  const publicPath = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;

  // Ensure the url starts with a forward slash if it doesn't already
  const normalizedURL = url.startsWith("/") ? url : `/${url}`;

  // Combine the public path with the normalized URL
  return `${publicPath}${normalizedURL.slice(1)}`;
}
