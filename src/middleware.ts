import { authkitMiddleware } from '@workos-inc/authkit-nextjs'
import { NEW_COMPANY_ROUTE, NEW_LISTING_ROUTE } from './constants/routes'

export default authkitMiddleware()

// Match against pages that require authentication
// Leave this out if you want authentication on every page in your application
export const config = {
  matcher: [
    '/',
    NEW_LISTING_ROUTE,
    `${NEW_LISTING_ROUTE}/:orgId*`,
    NEW_COMPANY_ROUTE,
    '/mockServiceWorker.js',
  ],
}
