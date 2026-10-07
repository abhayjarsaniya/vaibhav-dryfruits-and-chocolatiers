import Link from "next/link";
import { BRAND_SHORT, BRAND_SUB, BRAND_FULL } from "@/data/site";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}
      aria-label={BRAND_FULL}
    >
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#6E2635] text-[#6E2635] sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" fill="none">
          {/* Elegant luxury V emblem styled as a refined botanical nut crest */}
          <path
            d="M8.5 7.5L16 23.5L23.5 7.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11.5c-2.4 1.8-3.6 4-3.6 6.8 0 2.2 1.6 3.7 3.6 3.7s3.6-1.5 3.6-3.7c0-2.8-1.2-5-3.6-6.8Z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="currentColor"
            fillOpacity="0.12"
          />
          <circle cx="16" cy="8" r="1.1" fill="currentColor" />
        </svg>
      </span>
      <div className="flex flex-col">
        <span className="truncate whitespace-nowrap font-serif text-[15px] font-semibold leading-none tracking-tight text-ink min-[360px]:text-[16px] sm:text-xl">
          {BRAND_SHORT}
        </span>
        <span className="hidden text-[8.5px] font-medium uppercase tracking-[0.14em] text-[#6E2635] min-[380px]:inline-block">
          {BRAND_SUB}
        </span>
      </div>
    </Link>
  );
}
