<script lang="ts">
  import type { Preset } from "$lib/utils";

  export let preset: Preset;
</script>

<div class="rounded-md bg-gray-100 p-4">
  <h2 class:italic={!preset.name} class:font-bold={!!preset.name} class="text-xl">
    {preset.name || "Untitled"}
  </h2>
  <p>by {preset.author}</p>
  <slot />
  <div class="mt-4 flex gap-2">
    <button
      class="rounded-md bg-blue-500 px-3 py-1 text-white transition-colors hover:bg-blue-600 active:bg-blue-700"
      on:click={() => navigator.clipboard.writeText(preset.preset)}>
      Copy
    </button>
    <a href={preset.link}>
      <button class="rounded-md px-3 py-1">Source</button>
    </a>
  </div>
</div>
