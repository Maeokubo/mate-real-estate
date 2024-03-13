//import Link from 'next/link';
import Navigation from '../ui/Navigation';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>
        <Navigation />
      </nav>
      {children}
      <div className="fixed inset-x-0 bottom-0 bg-teal-900 p-4 text-white flex justify-center items-center">
        Footer
      </div>
    </section>
  )
}