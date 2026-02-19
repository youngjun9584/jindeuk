import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'full' | 'default' | 'narrow'
}

export default function Container({ 
  children, 
  className = '',
  size = 'default'
}: ContainerProps) {
  const sizeClasses = {
    full: 'w-full',
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  }
  
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  )
}
