<script lang="ts">
  export let text: string
  export let number: number = 123

  function inputChanged() {
    console.log(`New number: ${number}`)
  }
</script>

Please delete me, I am just a sample!
<br>

<div class="d-flex justify-content-center mt-2">
  <button class={$$props.class ?? 'btn btn-primary'} on:click={() => number++}>{text}</button>
  <input type="number" class="form-control w-auto ms-2" bind:value={number} on:change={inputChanged}>
</div>