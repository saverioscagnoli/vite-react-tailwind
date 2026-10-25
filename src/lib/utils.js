import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** @import { ClassValue } from "clsx" */

/**
 * @param {...ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
