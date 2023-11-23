<script lang="ts">
  import { enchants } from "$lib/constants";
  import { mapEnchantsToTiers } from "$lib/utils";

  export let item: ReturnType<typeof mapEnchantsToTiers>;

  let mapperFunction = (maxTier: number) => maxTier;
  let enchantsList = Object.keys(item);

  $: {
    item = mapEnchantsToTiers(enchantsList, mapperFunction);
  }
</script>

<p class="my-2 font-mono text-sm uppercase">Item Type</p>
<div class="flex flex-wrap gap-2">
  {#each Object.keys(enchants) as name, index}
    <button
      class="flex h-8 items-center justify-center rounded-md bg-gray-100 p-2 transition-colors hover:bg-gray-200 active:bg-gray-300"
      on:click={() => (enchantsList = enchants[name])}>{name}</button>
  {/each}
</div>

<p class="my-2 font-mono text-sm uppercase">Tier</p>
<div class="flex flex-wrap gap-2">
  <button
    class="flex h-8 items-center justify-center rounded-md bg-gray-100 p-2 transition-colors hover:bg-gray-200 active:bg-gray-300"
    on:click={() => (mapperFunction = () => 1)}>
    Lowest
  </button>
  <button
    class="flex h-8 items-center justify-center rounded-md bg-gray-100 p-2 transition-colors hover:bg-gray-200 active:bg-gray-300"
    on:click={() => (mapperFunction = (maxTier) => maxTier - 1)}>
    Highest - 1
  </button>
  <button
    class="flex h-8 items-center justify-center rounded-md bg-gray-100 p-2 transition-colors hover:bg-gray-200 active:bg-gray-300"
    on:click={() => (mapperFunction = (maxTier) => maxTier)}>
    Highest
  </button>
</div>
