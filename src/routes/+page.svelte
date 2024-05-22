<script>
  // export let data
  // console.log(data)
  import { signIn } from '@auth/sveltekit/client'
</script>

<h1>Inicio de sesión con AuthJs</h1>
<!-- <a href="/tasks">Ingresar</a> -->

<button on:click={() => {
  signIn('google', { callbackUrl: '/tasks' })
}}>Iniciar sesión con Google</button>