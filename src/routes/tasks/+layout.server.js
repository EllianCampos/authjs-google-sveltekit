import { redirect } from '@sveltejs/kit'

export const load = async (event) => {
  const session = await event.locals.auth()

  if (!session?.user) {
    return redirect(307, '/')
  }

  return {
    session
  }
}