import React, { forwardRef, useState } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  showPasswordToggle?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      showPasswordToggle = false,
      leftIcon,
      rightIcon,
      variant = 'default',
      size = 'md',
      type = 'text',
      className = '',
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
      if (type === 'password') {
        setShowPassword(!showPassword);
        setInputType(showPassword ? 'password' : 'text');
      }
    };

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-3 py-3 text-base',
      lg: 'px-4 py-4 text-lg',
    };

    // Variant classes
    const variantClasses = {
      default: 'border border-gray-300 bg-white',
      outlined: 'border-2 border-gray-300 bg-transparent',
      filled: 'border border-gray-300 bg-gray-50',
    };

    // Base input classes
    const baseClasses = `
      w-full rounded-lg shadow-sm placeholder-gray-400 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
      transition-colors disabled:opacity-50 disabled:cursor-not-allowed
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${error ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500' : ''}
      ${leftIcon ? 'pl-10' : ''}
      ${(rightIcon || (showPasswordToggle && type === 'password')) ? 'pr-10' : ''}
      ${className}
    `.trim();

    const EyeIcon = ({ isVisible }: { isVisible: boolean }) => (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {isVisible ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
          />
        ) : (
          <>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </>
        )}
      </svg>
    );

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            type={inputType}
            className={baseClasses}
            {...props}
          />

          {/* Right Icon or Password Toggle */}
          {(rightIcon || (showPasswordToggle && type === 'password')) && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {showPasswordToggle && type === 'password' ? (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors"
                  tabIndex={-1}
                >
                  <EyeIcon isVisible={showPassword} />
                </button>
              ) : (
                <div className="text-gray-400 pointer-events-none">
                  {rightIcon}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
