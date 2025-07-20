import React from 'react';

type MyButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function MyButton({ children, onClick }: MyButtonProps) {
  return (
    <button
      style={{ padding: '8px 16px', margin: '4px', borderRadius: '4px' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
