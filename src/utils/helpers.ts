/* eslint-disable require-unicode-regexp */
export function replaceExtensionWithWebp(url: string): string {
  return url.replace(/\.[^/.]+$/, '.webp');
}
