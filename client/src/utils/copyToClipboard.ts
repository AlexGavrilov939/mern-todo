export const copyToClipboard = async (value: string): Promise<void> => {
  if ("clipboard" in navigator) {
    await navigator.clipboard.writeText(value);
  }
  // legacy support for better compatibility
  document.execCommand("copy", true, value);
};
