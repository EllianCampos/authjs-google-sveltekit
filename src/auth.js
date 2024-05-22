import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google]
})

// const providers = [Google]

// // Esta funcion mapea los providers para mostrarlos
 
// export const providerMap = providers.map((provider) => {
//   if (typeof provider === "function") {
//     const providerData = provider()
//     return { id: providerData.id, name: providerData.name }
//   } else {
//     return { id: provider.id, name: provider.name }
//   }
// })

// export const { handle, signIn, signOut} = SvelteKitAuth({
//   providers,
//   pages: {
//     // signIn: "/login"
//   }
// })