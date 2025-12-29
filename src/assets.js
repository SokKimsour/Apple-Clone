export const getAssetPath = (path) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) {
    return path;
  }
  const baseUrl = import.meta.env.BASE_URL || "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};
