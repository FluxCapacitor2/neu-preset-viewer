<script lang="ts">
  import { parsePreset } from "$lib/utils";
  import CustomTodoPresetPage from "../../components/CustomTodoPresetPage.svelte";
  import EnchantPresetPage from "../../components/neuec/EnchantPresetPage.svelte";

  export let form;

  let presetString = form?.preset?.toString();
  let preset = presetString ? parsePreset(atob(presetString)) : null;
</script>

<main class="mx-auto max-w-max">
  {#if !preset}
    <p>
      Submit an NEU custom preset to preview using the form above. Information related to the preset
      will appear here.
    </p>
  {:else if preset.type === "NEUEC"}
    <EnchantPresetPage content={preset.content} />
  {:else if preset.type === "NEU:CUSTOMTODO"}
    <CustomTodoPresetPage content={preset.content} />
  {:else}
    <p>We can't recognize that kind of preset!</p>
    <pre><code>(type: {preset.type})</code></pre>
  {/if}
</main>
