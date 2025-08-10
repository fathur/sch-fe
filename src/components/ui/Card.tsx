import React from 'react';

export interface CardProps {
  title: string;
  body: string;
  footer?: string;
  color?: string;
  icon?: string;
  variant?: 'default' | 'outlined' | 'elevated' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  showFooter?: boolean;
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  body,
  footer,
  color = 'from-blue-500 to-cyan-500',
  icon,
  variant = 'default',
  size = 'md',
  showFooter = true,
  showIcon = true,
  className = '',
  onClick,
  children,
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  // Variant classes
  const variantClasses = {
    default: 'bg-white/80 backdrop-blur-md border border-white/20 shadow-lg',
    outlined: 'bg-white border-2 border-gray-200 shadow-sm',
    elevated: 'bg-white shadow-xl border-0',
    minimal: 'bg-gray-50 border border-gray-100 shadow-sm',
  };

  // Header size classes
  const headerSizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  // Title size classes
  const titleSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  // Body size classes
  const bodySizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const baseClasses = `
    rounded-xl overflow-hidden transition-all duration-300
    ${variantClasses[variant]}
    ${onClick ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1' : ''}
    ${className}
  `.trim();

  return (
    <div className={baseClasses} onClick={onClick}>
      {/* Card Header */}
      <div className={`bg-gradient-to-r ${color} ${headerSizeClasses[size]} text-white`}>
        <div className="flex items-center justify-between">
          <h3 className={`font-semibold ${titleSizeClasses[size]}`}>{title}</h3>
          {showIcon && icon && (
            <span className="text-2xl">{icon}</span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className={sizeClasses[size]}>
        {children || (
          <p className={`text-gray-700 leading-relaxed ${bodySizeClasses[size]}`}>
            {body}
          </p>
        )}
      </div>

      {/* Card Footer */}
      {showFooter && footer && (
        <div className={`px-${size === 'sm' ? '3' : size === 'md' ? '4' : '6'} pb-${size === 'sm' ? '3' : size === 'md' ? '4' : '6'}`}>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{footer}</span>
            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              View Details →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
