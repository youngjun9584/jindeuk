import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  href?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  href,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-secondary text-white hover:bg-secondary-light',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    )
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}
