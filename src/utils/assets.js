export const getAssetPath = (path) => {
  if (!path) return "";
  // If the path is already an absolute URL or data URI, return it as is
  if (path.startsWith("http") || path.startsWith("data:")) {
    return path;
  }
  const baseUrl = import.meta.env.BASE_URL || "/";
  // Remove leading slash from path if it exists to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};
