<script>
  import {page} from '$app/stores'
  import { signOut } from '@auth/sveltekit/client'
</script>

<nav class="navbar navbar-expand-sm bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Lista de tareas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/tasks">Mis tareas</a>
        </li>
        <li class="nav-item">
          <button class="nav-link" on:click={signOut}>Cerrar sesión</button>
        </li>
      </ul>
    </div>
    <!-- <div>
      <img src={$page.data.session?.user.image} class="me-1" style="width: 30px;" alt="Foto de perfil">
    </div> -->
      <div class="d-none d-sm-inline d-flex">
        <h5 class="m-0 p-0">{$page.data.session?.user.name}</h5>
        <p class="m-0 p-0">{$page.data.session?.user.email}</p>
      </div>
  </div>
</nav>