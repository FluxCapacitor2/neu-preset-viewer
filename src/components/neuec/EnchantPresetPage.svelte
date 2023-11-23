<script lang="ts">
  import { colorCodesToClassNames, colorCodesToDisplayNames, enchants } from "$lib/constants";
  import { mapEnchantsToMaxTiers } from "$lib/utils";
  import groupBy from "just-group-by";
  import EnchantPreviewSwitcher from "./EnchantPreviewSwitcher.svelte";
  import ItemPreview from "./ItemPreview.svelte";
  export let content: string[];

  const grouped = groupBy(content, (item) => item.substring(0, item.indexOf(":")));

  let testItem = mapEnchantsToMaxTiers(enchants["Sword/Longsword"]);
</script>

<h2 class="mb-2 mt-8 text-2xl font-bold">Custom Enchantment Color Preset</h2>
<p class="mb-4">Use the buttons below to cycle through preview items.</p>
<div class="max-w-2xl">
  <EnchantPreviewSwitcher bind:item={testItem} />
</div>

{#key testItem}
  <ItemPreview enchants={testItem} preset={content} />
{/key}

<h2 class="mt-8 text-2xl font-bold">Rules</h2>

<div class="prose mt-4">
  <table>
    <tbody>
      {#each Object.entries(grouped) as [name, filters]}
        <tr>
          <td class="max-w-xs">{name.replaceAll(/\|/g, ", ").replaceAll(/\(|\)/g, "")}</td>

          <td
            >{#each filters.map((filter) => filter.split(":").toSpliced(0, 1)) as item}
              <p>
                Level {item[0]}
                {item[1]}:
                <span class={colorCodesToClassNames[item[2]]}
                  >{colorCodesToDisplayNames[item[2]]}</span>
              </p>
            {/each}</td>
        </tr>
      {/each}</tbody>
  </table>
</div>
