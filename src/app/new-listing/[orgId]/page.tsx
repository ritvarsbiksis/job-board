import '@radix-ui/themes/styles.css'
import { getUser } from '@workos-inc/authkit-nextjs'
import { WorkOS } from '@workos-inc/node'

import { JobForm } from '@/components/job-form/job-form'
import { LoginToUse } from '@/components/login-to-use/login-to-use'

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

  return <JobForm />
}
