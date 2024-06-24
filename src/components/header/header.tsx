import { NEW_LISTING_ROUTE } from '@/constants/routes'
import { getUser, getSignInUrl, signOut } from '@workos-inc/authkit-nextjs'
import Link from 'next/link'

export const Header = async () => {
  const { user } = await getUser()
  const signInUrl = await getSignInUrl()

  return (
    <header>
      <div className="container flex items-center justify-between my-4">
        <Link className="font-bold text-xl" href={'/'}>
          Job Board
        </Link>
        <nav className="flex gap-2 ">
          {!user && (
            <Link className="bg-gray-200 rounded-md py-2 px-4" href={signInUrl}>
              Login
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                'use server'
                await signOut()
              }}
            >
              <button className="bg-gray-200 rounded-md py-2 px-4" type="submit">
                Logout
              </button>
            </form>
          )}
          <Link className="rounded-md py-2 px-4 bg-blue-600 text-white" href={NEW_LISTING_ROUTE}>
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  )
}
