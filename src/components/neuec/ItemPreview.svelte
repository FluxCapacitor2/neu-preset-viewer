<script lang="ts">
  import { displayNames, ultimateEnchantments } from "$lib/constants";
  import { parseEnchantPreset, toRoman } from "$lib/utils";

  export let enchants: Record<keyof typeof displayNames, number>;
  export let preset: string[];

  const entries = Object.entries(enchants)
    .filter((item) => {
      if (displayNames[item[0]] !== undefined) {
        return true;
      } else {
        console.log("Unknown enchantment:", item[0]);
        return false;
      }
    })
    .toSorted(([a], [b]) => {
      // Ultimate enchantments come first
      if (ultimateEnchantments.includes(displayNames[a])) {
        return -1;
      } else if (ultimateEnchantments.includes(displayNames[b])) {
        return 1;
      }
      // Sort enchants alphabetically by name
      return a > b ? 1 : 0;
    });

  const parsedPreset = parseEnchantPreset(preset);
  function getClass(name: string, level: number) {
    const displayName = displayNames[name];
    return parsedPreset(displayName, level);
  }
</script>

<p class="w-96 font-minecraft">
  {#each entries as [name, level], index}
    <span class="inline-block whitespace-nowrap">
      {#if displayNames[name] !== undefined}
        <span class={getClass(name, level)}>{displayNames[name]} {toRoman(level)}</span>
      {/if}
      {#if index !== entries.length - 1}
        <span class="minecraft-blue">,&nbsp;</span>
      {/if}
    </span>
  {/each}
</p>
