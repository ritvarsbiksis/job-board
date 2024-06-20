import Link from 'next/link'

export const Header = () => (
  <header>
    <div className="flex items-center justify-between">
      <Link className="font-bold text-xl" href={'/'}>
        Job Board
      </Link>
      <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
        <Link className="bg-gray-200" href={'/login'}>
          Login
        </Link>
        <Link className="bg-blue-600 text-white" href={'/post'}>
          Post a job
        </Link>
      </nav>
    </div>
  </header>
)
