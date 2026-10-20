import { useId } from 'react'

/* Exact outlines taken from the design file, expressed in each element's own coordinate space. */

// Problem section photo: 564×564, 10px corners top-left/bottom-right, 80px top-right/bottom-left.
const TEAM_PATH =
  'M10 0H484C528.18 0 564 35.82 564 80V554C564 559.52 559.52 564 554 564H80C35.82 564 0 528.18 0 484V10C0 4.48 4.48 0 10 0Z'

// Audience card photo: 591×287 with the notch that seats the green badge.
const CARD_PATH =
  'M0 267V20C0 8.95 8.95 0 20 0H571C582.05 0 591 8.95 591 20V180.74C591 191.79 582.05 200.74 571 200.74H530.5C519.45 200.74 510.5 209.7 510.5 220.74V267C510.5 278.05 501.55 287 490.5 287H20C8.95 287 0 278.05 0 267Z'

export function ShapedPhoto({ variant, src, alt, className = '' }) {
  const id = useId().replace(/:/g, '')
  const isTeam = variant === 'team'
  const w = isTeam ? 564 : 591
  const h = isTeam ? 564 : 287
  return (
    <svg
      className={`shaped-photo ${className}`}
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      role="img"
      aria-label={alt}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id={`clip-${id}`}>
          <path d={isTeam ? TEAM_PATH : CARD_PATH} />
        </clipPath>
      </defs>
      <image
        href={src}
        width={w}
        height={h}
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#clip-${id})`}
      />
    </svg>
  )
}
