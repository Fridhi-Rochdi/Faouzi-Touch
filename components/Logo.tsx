interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 40 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Perfume bottle shape */}
      <g>
        {/* Bottle cap */}
        <rect x="42" y="10" width="16" height="8" rx="2" fill="url(#gradient1)" />
        <rect x="40" y="18" width="20" height="4" rx="1" fill="url(#gradient2)" />
        
        {/* Bottle neck */}
        <path
          d="M 45 22 L 43 35 L 57 35 L 55 22 Z"
          fill="url(#gradient3)"
        />
        
        {/* Main bottle body */}
        <path
          d="M 35 35 Q 33 35 33 37 L 33 75 Q 33 80 38 82 L 62 82 Q 67 80 67 75 L 67 37 Q 67 35 65 35 Z"
          fill="url(#gradient4)"
        />
        
        {/* Bottle highlight */}
        <ellipse cx="42" cy="50" rx="3" ry="8" fill="white" fillOpacity="0.3" />
        
        {/* Letter F */}
        <path
          d="M 44 50 L 44 68 M 44 50 L 52 50 M 44 58 L 50 58"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Letter T */}
        <path
          d="M 54 50 L 62 50 M 58 50 L 58 68"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Decorative sparkles */}
        <circle cx="25" cy="30" r="2" fill="#D4AF37" opacity="0.8" />
        <circle cx="75" cy="45" r="1.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="70" cy="65" r="2" fill="#D4AF37" opacity="0.7" />
      </g>
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6F47" />
          <stop offset="100%" stopColor="#6A5638" />
        </linearGradient>
        
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A68A64" />
          <stop offset="100%" stopColor="#8B6F47" />
        </linearGradient>
        
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4C4A8" />
          <stop offset="100%" stopColor="#A68A64" />
        </linearGradient>
        
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E5D5BE" />
          <stop offset="30%" stopColor="#D4C4A8" />
          <stop offset="70%" stopColor="#C4B49A" />
          <stop offset="100%" stopColor="#A68A64" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
