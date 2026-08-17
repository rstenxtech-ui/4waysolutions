import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function DropIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3.5 4 6 7.6 6 10.5a6 6 0 1 1-12 0C6 10.6 8.5 7 12 3Z" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L4 16.5 7.5 20l5.3-5.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2.1-2.1 2.6-2.6Z" />
    </svg>
  );
}

export function SprayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 8h6l1 12H8L9 8Z" />
      <path d="M10 8V5a2 2 0 0 1 2-2h1" />
      <path d="M15 4l2-1M16 6.5l2.3-.4M15.5 9l2.4.6" />
    </svg>
  );
}

export function CartridgeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="3" width="8" height="18" rx="2" />
      <path d="M8 9h8M8 15h8" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4L7.5 9.5a12 12 0 0 0 7 7L16 14.5l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.3-3.4A8 8 0 0 1 4 12Z" />
      <path d="M8.5 11h7M8.5 14h4.5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.4.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.5-.3Z" />
      <path d="M12.04 2C6.58 2 2.13 6.4 2.13 11.8c0 1.8.48 3.5 1.36 5L2 22l5.4-1.4c1.45.79 3.08 1.2 4.64 1.2 5.46 0 9.91-4.4 9.91-9.9C21.95 6.4 17.5 2 12.04 2Zm0 18.05c-1.5 0-2.97-.4-4.24-1.16l-.3-.18-3.2.84.86-3.1-.2-.32a8.06 8.06 0 0 1-1.28-4.33c0-4.5 3.7-8.15 8.36-8.15 4.66 0 8.36 3.65 8.36 8.15 0 4.5-3.7 8.25-8.36 8.25Z" />
    </svg>
  );
}
