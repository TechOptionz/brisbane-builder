import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(
  { size = 18, ...props }: IconProps,
  children: React.ReactNode,
  strokeWidth = 1.8,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export const Spark = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 3l1.8 4.9L19 9.5l-4.5 2.4L12 17l-2.5-5.1L5 9.5l5.2-1.6z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
    </>,
  );

export const SparkSmall = (p: IconProps) =>
  base(
    p,
    <path d="M12 3l1.8 4.9L19 9.5l-4.5 2.4L12 17l-2.5-5.1L5 9.5l5.2-1.6z" />,
  );

export const Home = (p: IconProps) =>
  base(p, <path d="M3 10.5 12 3l9 7.5V21h-6v-6h-6v6H3z" />);

export const FileDoc = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M6 2h9l4 4v16H6z" />
      <path d="M14 2v5h5" />
    </>,
  );

export const Lock = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>,
  );

export const Check = (p: IconProps) => base(p, <path d="M4 12l6 6L20 6" />, 2.5);

export const CheckCircle = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </>,
  );

export const Warning = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 3l9 16H3z" />
      <path d="M12 10v4M12 17.5h.01" />
    </>,
    2,
  );

export const InfoCircle = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16.5h.01" />
    </>,
    2,
  );

export const Clock = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>,
  );

export const Search = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5 21 21" />
    </>,
  );

export const ArrowRight = (p: IconProps) =>
  base(p, <path d="M5 12h14M13 6l6 6-6 6" />, 2);

export const ChevronDown = (p: IconProps) => base(p, <path d="M6 9l6 6 6-6" />, 2);

export const ChevronLeft = (p: IconProps) => base(p, <path d="M15 6l-6 6 6 6" />, 2);

export const Refresh = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v5h-5" />
    </>,
  );

export const Camera = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M9 6l1.5-2h3L15 6" />
    </>,
  );

export const Rows = (p: IconProps) => base(p, <path d="M4 6h16M4 12h16M4 18h10" />);

export const Filter = (p: IconProps) => base(p, <path d="M4 6h16M7 12h10M10 18h4" />);

export const Download = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 4v12M6 10l6 6 6-6" />
      <path d="M4 20h16" />
    </>,
  );

export const Upload = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 16V4M6 10l6-6 6 6" />
      <path d="M4 20h16" />
    </>,
  );

export const Plus = (p: IconProps) => base(p, <path d="M12 5v14M5 12h14" />, 2);

export const Shield = (p: IconProps) =>
  base(p, <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />);

export const Users = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </>,
  );

export const GridPlus = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 3v18M3 9h18" />
    </>,
  );

export const Building = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M3 21h18M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-5h6v5" />
    </>,
  );

export const CreditCard = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </>,
  );

export const More = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </>,
    2,
  );
