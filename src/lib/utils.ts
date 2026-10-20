import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatRupiah(value: number) {
  // Spasi tak terputus agar "Rp" tidak terpisah dari angkanya di layar sempit
  return `Rp ${value.toLocaleString("id-ID")}`;
}

export function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
