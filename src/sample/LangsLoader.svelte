<script lang="ts">
  export let url: string

  $: load(url)

  let langs: string[], error = ''
  async function load(url: string) {
    langs = await fetch(url).then(r => r.json()).catch(e => error = e)
  }
</script>

{#if error}
  <div class="alert alert-danger my-2">{error}</div>
{/if}

Loaded languages:
<div class="langs">
  {#each langs ?? [] as lang, i}
    <div>{i + 1}. {lang}</div>
  {/each}
</div>