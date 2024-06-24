import { LoginToUse } from '@/components/login-to-use/login-to-use'
import { getUser } from '@workos-inc/authkit-nextjs'
import { WorkOS } from '@workos-inc/node'

interface Params {
  orgId: string
}

export default async function NewListingForOrganizationPage({ params }: { params: Params }) {
  const { user } = await getUser()

  if (!user) return <LoginToUse />

  const workOS = new WorkOS(process.env.WORKOS_API_KEY)
  const oms = await workOS.userManagement.listOrganizationMemberships({
    userId: user.id,
    organizationId: params.orgId,
  })

  if (!oms.data.length) return <div className="container">Organization doesn&lsquo;t found</div>

  const [{ organizationId }] = oms.data

  return (
    <form action="" className="container mt-6">
      {organizationId}
      <input placeholder="job title" className="block border p-2 mt-2 rounded-md" type="tex]" />
    </form>
  )
}
