import { getUser } from '@workos-inc/authkit-nextjs'

import { createCompany } from '@/actions/workos'
import { LoginToUse } from '@/components/login-to-use/login-to-use'

export default async function NewCompanyPage() {
  const { user } = await getUser()

  if (!user) return <LoginToUse />

  const handleCreateOrganization = async (formData: FormData) => {
    'use server'
    if (user) await createCompany(formData.get('newCompanyName') as string, user?.id)
  }

  return (
    <div className="container">
      <h2 className="text-lg mt-6">Create a new company</h2>
      <p className="text-gray-500 text-sm mb-3">
        To create a job listing your first need to register a company
      </p>

      <form action={handleCreateOrganization} className="flex gap-2">
        <input
          name="newCompanyName"
          className="p-2 border border-gray-400 rounded-md"
          type="text"
          placeholder="company name"
        />
        <button type="submit" className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
          Create company
        </button>
      </form>
    </div>
  )
}
