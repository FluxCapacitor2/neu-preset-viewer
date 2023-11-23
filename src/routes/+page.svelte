<script lang="ts">
  import { enchants } from "$lib/constants";
  import { mapEnchantsToMaxTiers, parsePreset } from "$lib/utils";
  import enchantPresets from "../assets/presets/neuec.json";
  import todoPresets from "../assets/presets/todos.json";
  import PresetCard from "../components/PresetCard.svelte";
  import EnchantPreviewSwitcher from "../components/neuec/EnchantPreviewSwitcher.svelte";
  import ItemPreview from "../components/neuec/ItemPreview.svelte";

  let previewItem = mapEnchantsToMaxTiers(enchants["Sword/Longsword"]);
</script>

<main class="mx-auto max-w-max">
  <h2 class="my-6 text-2xl font-bold">Enchantment Color Presets</h2>
  <p>Use the buttons below to change the preview type.</p>

  <div class="mb-4 max-w-2xl">
    <EnchantPreviewSwitcher bind:item={previewItem} />
  </div>

  <div class="grid grid-cols-3 gap-4">
    {#each enchantPresets as preset}
      <PresetCard {preset}>
        {#key previewItem}
          <ItemPreview enchants={previewItem} preset={parsePreset(atob(preset.preset)).content} />
        {/key}
      </PresetCard>
    {/each}
  </div>

  <h2 class="my-6 text-2xl font-bold">Custom TODO Presets</h2>
  <div class="grid grid-cols-3 gap-4">
    {#each todoPresets as preset}
      <PresetCard {preset} />
    {/each}
  </div>
</main>
