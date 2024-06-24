'use server'

import { NEW_LISTING_ROUTE } from '@/constants/routes'
import { getUser } from '@workos-inc/authkit-nextjs'
import { WorkOS } from '@workos-inc/node'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const workOS = new WorkOS(process.env.WORKOS_API_KEY)

export const createCompany = async (name: string, userId: string) => {
  const { user } = await getUser()

  const org = await workOS.organizations.createOrganization({ name })

  if (user)
    await workOS.userManagement.createOrganizationMembership({
      userId,
      organizationId: org.id,
      roleSlug: 'admin',
    })

  revalidatePath(NEW_LISTING_ROUTE)
  redirect(NEW_LISTING_ROUTE)
}
