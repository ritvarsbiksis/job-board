import { LoginToUse } from '@/components/login-to-use/login-to-use'
import { NEW_COMPANY_ROUTE, NEW_LISTING_ROUTE } from '@/constants/routes'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getUser } from '@workos-inc/authkit-nextjs'
import { WorkOS } from '@workos-inc/node'
import Link from 'next/link'

export default async function NewListingPage() {
  const { user } = await getUser()

  if (!user) return <LoginToUse />

  const workOS = new WorkOS(process.env.WORKOS_API_KEY)
  const organizationMemberships = await workOS.userManagement
    .listOrganizationMemberships({
      userId: user?.id,
    })
    .then(({ data }) => data)

  const activeOrganizationMemberships = organizationMemberships.filter(om => om.status === 'active')
  const organizationsNames: { [orgId: string]: string } = {}

  for (const activeMembership of activeOrganizationMemberships) {
    const organization = await workOS.organizations.getOrganization(activeMembership.organizationId)
    Object.assign(organizationsNames, { [organization.id]: organization.name })
  }

  return (
    <div className="container">
      <h2 className="text-lg mt-6">Your companies</h2>
      <p className="text-gray-500 text-sm mb-2">Select a company to create a job add for</p>
      {!organizationMemberships.length && (
        <div className="border border-blue-200 bg-blue-50 rounded-md p-4">
          No companies found assigned to your user
        </div>
      )}
      <div>
        <div className="inline-block mt-2 border rounded-md">
          {activeOrganizationMemberships.map(({ organizationId }) => (
            <Link
              key={organizationId}
              className="flex gap-4 items-center  p-2 px-4 border-t border-gray-200 first-of-type:border-t-0"
              href={`${NEW_LISTING_ROUTE}/${organizationId}`}
            >
              {organizationsNames[organizationId]}
              <FontAwesomeIcon className="h-4 text-gray-600" icon={faArrowRight} />
            </Link>
          ))}
        </div>
      </div>
      <Link
        className="inline-flex gap-4 items-center bg-gray-200 px-4 py-2 rounded-md mt-6 "
        href={NEW_COMPANY_ROUTE}
      >
        Create a new company
        <FontAwesomeIcon className="h-4 text-gray-600" icon={faArrowRight} />
      </Link>
    </div>
  )
}
