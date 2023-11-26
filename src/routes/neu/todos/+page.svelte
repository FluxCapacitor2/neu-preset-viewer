<script lang="ts">
  import todoPresets from "../../../assets/presets/todos.json";
  import PresetCard from "../../../components/PresetCard.svelte";
</script>

<h2 class="my-6 text-2xl font-bold">Custom TODO Presets</h2>
<div class="grid grid-cols-3 gap-4">
  {#each todoPresets as preset}
    <PresetCard {preset} />
  {/each}
</div>
