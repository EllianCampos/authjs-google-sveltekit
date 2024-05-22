<script>
  import { page } from '$app/stores'
  import { signOut } from '@auth/sveltekit/client'
  console.log($page.data)
</script>

<header>
  <p>{$page.data.session?.user.name}</p>
  <p>{$page.data.session?.user.email}</p>
  <img src={$page.data.session?.user.image} alt="">
  <button on:click={signOut}>Signout</button>
</header>
<main>
  <slot />
</main>
