import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
