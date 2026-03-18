export function OctopusIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Body */}
      <ellipse cx="32" cy="32" rx="20" ry="18" fill="currentColor" />

      {/* Eyes */}
      <circle cx="26" cy="30" r="3" fill="#0a0e1a" />
      <circle cx="38" cy="30" r="3" fill="#0a0e1a" />

      {/* Arms - simplified representation */}
      <path d="M14 38 Q8 48 12 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M18 42 Q14 54 18 58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M50 38 Q56 48 52 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M46 42 Q50 54 46 58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M20 40 Q12 44 10 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M44 40 Q52 44 54 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}
