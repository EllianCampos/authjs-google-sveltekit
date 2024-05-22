<script>
  import { signIn } from '@auth/sveltekit/client'
  import NavbarLogin from '$lib/components/NavbarLogin.svelte'
</script>

<header>
  <NavbarLogin />
  <h1 class="text-center mt-3">Inicia sesión para acceder a tu Gestor de tareas</h1>
</header>

<main class="text-center mt-5">
  <button
    on:click={() => {
      signIn('google', { callbackUrl: '/tasks' })
    }}>
      <i class="bi bi-google me-1"></i>
      Iniciar sesión con Google
    </button
  >
</main>
