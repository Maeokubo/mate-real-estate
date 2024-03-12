'use client'
 
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  {href: '/project', name: 'home'},
  {href: '/project/about', name: 'about'},
  {href: '/project/contact', name: 'contact'},
  {href: '/project/blog', name: 'blog'},
]
 
export default function navigation() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul className="flex justify-center gap-12 bg-teal-900 text-slate-50 font-medium text-lg overflow-hidden">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          //console.log(isActive, link.href, pathname);
          return (
            <li key={link.name} className='p-4' >
              <Link 
                className={`${isActive ? 'bg-teal-700' : ''}  p-4 `}
                href={link.href} 
              >
                {link.name}
              </Link>
            </li>
          )
        })} 
      </ul>
    </nav>
  )
}