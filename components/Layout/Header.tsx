import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  const [show, setShow] = React.useState(false);
  return (
    <nav className="bg-white p-1 shadow">
      <div className="flex items-center justify-center flex-wrap mx-auto w-10/12">
        <div className="flex flex-col items-center flex-shrink-0">
          <Link href={'/'}>
            <Image
              className="cursor-pointer"
              width={100}
              height={70}
              src={'/logo.png'}
              alt="logo"
            />
          </Link>
          <div>
            <h2 className="text-xl"> noodle sapp</h2>
          </div>
        </div>
      </div>
    </nav>
  );
}
