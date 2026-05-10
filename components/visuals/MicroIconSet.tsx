import React from 'react';
import { cn } from '@/lib/utils';
// Note: In actual implementation, we would use lucide-react or hugeicons.
// Simulating generic SVGs here for the design system requirements without external dependencies.

type IconName = 'map-pin' | 'palette' | 'users' | 'clock' | 'briefcase' | 'mic' | 'star' | 'glass-water' | 'gift' | 'lightbulb' | 'trending-up';

interface MicroIconSetProps extends React.SVGProps<SVGSVGElement> {
  name: IconName | string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'glowing';
}

export const MicroIconSet: React.FC<MicroIconSetProps> = ({
  name,
  size = 'md',
  variant = 'outline',
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const variantClasses = {
    solid: 'fill-primary text-primary',
    outline: 'fill-none stroke-primary stroke-2',
    glowing: 'fill-none stroke-primary stroke-2 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]',
  };

  // Generic fallback rendering a circle if icon not explicitly mapped.
  // In a real scenario, this would map to actual Lucide or Hugeicons components.
  const renderIconPath = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'map-pin':
      case 'mappin':
        return <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />;
      case 'clock':
        return <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />;
      case 'users':
        return <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />;
      case 'star':
        return <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />;
      default:
        // Default abstract geometry for unmapped icons
        return (
          <>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6m0-6l-6 6" />
          </>
        );
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "transition-all duration-300",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {renderIconPath(name)}
    </svg>
  );
};
