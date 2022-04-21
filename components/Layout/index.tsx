import React, { ReactChild, ReactChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export default function Layout({ children }: AuxProps) {
  return (
    <>
      <Header />
      <main style={{ minHeight: '85vh' }}>{children}</main>
      <Footer />
    </>
  );
}
