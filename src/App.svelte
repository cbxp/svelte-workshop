<script lang="ts">
  import {onMount} from 'svelte'
  import Dummy from './sample/Dummy.svelte'
  import LangsLoader from './sample/LangsLoader.svelte'

  let count: number = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<style>
  .App-header {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  .App-logo {
    height: 36vmin;
    margin-bottom: 3rem;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }

  @keyframes App-logo-spin {
    from {transform: scale(1);}
    to {transform: scale(1.06);}
  }
</style>

<div class="App container text-center">
  <header class="App-header">
    <img src="/logo.svg" class="App-logo" alt="logo">
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <p>Page has been open for <code>{count}</code> seconds.</p>
    <p>
      <a class="App-link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
        Learn Svelte
      </a>
    </p>
  </header>

  <hr class="my-4">
  <h2>Dummy component</h2>
  <Dummy text="Click to increment"/>

  <hr class="my-4">
  <LangsLoader url="/i18n/langs.json"/>
</div>
