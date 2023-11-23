<script lang="ts">
  import "@south-paw/typeface-minecraft";
  import "../assets/app.css";
  import PresetSubmitForm from "../components/PresetSubmitForm.svelte";
</script>

<svelte:head>
  <title>NEU Preset Viewer</title>
  <meta
    name="description"
    content="View NotEnoughUpdates configuration presets for Hypixel Skyblock, including custom enchant color and custom todo preset types." />
</svelte:head>

<a href="/">
  <h1 class="my-8 text-center text-3xl font-bold">NEU Preset Viewer</h1>
</a>

<div class="mb-8">
  <PresetSubmitForm />
</div>

<slot />

<footer class="mt-72">&nbsp;</footer>
