import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function StrawIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <g transform="rotate(25 12 12)">
        <rect x="10" y="1.5" width="4" height="21" rx="2" />
        <path d="m10 7.5 4-2M10 12.5l4-2M10 17.5l4-2" />
      </g>
    </svg>
  );
}

export function CupLidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 15.5a6 6 0 0 1 12 0" />
      <path d="M3 15.5h18" />
      <path d="M4.5 15.5v2a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-2" />
      <path d="M10.5 9.8h3" />
    </svg>
  );
}
