export function formatPathUrlToTitle(segment: string | undefined) {
  if (!segment) return "";
  return segment
    .split("-") // Split the segment by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words with spaces
}
