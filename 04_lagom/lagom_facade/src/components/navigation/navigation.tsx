"use client";

import Link from "next/link";
import { FC } from "react";

type NavItem = {
  id: number;
  attributes: {
    title: string;
    slug: string;
  };
};

type NavigationProps = {
  navItems: NavItem[];
};

// example data from above fetch
// [
//     {id: 2, attributes:
//         { title: 'About', slug: 'about' }
//     },
//     {id:3, attributes:
//         { title: 'Contact', slug: 'contact' }
//     }
// ]

const Navigation: FC<NavigationProps> = ({ navItems }) => {
  return (
    <nav className='col-span-5 self-center px-12 py-8'>
      <ul className='flex'>
        {navItems.map((navItem) => (
          <li key={navItem.id} className='mr-6'>
            <Link
              className='font-bree text-mono-black p-2'
              href={`/${navItem.attributes.slug}`}
            >
              {navItem.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
