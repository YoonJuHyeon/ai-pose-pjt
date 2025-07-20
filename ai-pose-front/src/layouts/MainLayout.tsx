import React from 'react';

type Props = { children: React.ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      {children}
    </div>
  );
}
