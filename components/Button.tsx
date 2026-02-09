
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all overflow-hidden cursor-pointer active:scale-95";
  
  const variants = {
    primary: "bg-primary text-secondary",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
    outline: "border-2 border-slate-200 text-slate-900 bg-transparent hover:border-primary hover:text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-full",
    md: "px-8 py-3.5 text-sm rounded-full",
    lg: "px-10 py-5 text-lg rounded-full",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div 
        className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
    </motion.button>
  );
};

export default Button;
