/**
 * Utility function to create a new Uint8Array from a series of Uint8Array instances or byte values.
 * @param ar - An array of Uint8Array instances or byte values (0-255).
 * @returns A new Uint8Array containing the concatenated values.
 * @version 0.8.1
 */
export function unity(...ar: (Uint8Array | number)[]): Uint8Array;