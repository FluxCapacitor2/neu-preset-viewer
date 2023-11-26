<script lang="ts">
  import "@south-paw/typeface-minecraft";
  import "../assets/app.css";
  import PresetSubmitForm from "../components/PresetSubmitForm.svelte";
</script>

<svelte:head>
  <title>Hypixel SkyBlock Preset Viewer</title>
  <meta
    name="description"
    content="View configuration presets for Hypixel Skyblock, including custom enchant color, todo, and notification preset types." />
</svelte:head>

<a href="/">
  <h1 class="my-8 text-center text-3xl font-bold">SkyBlock Preset Viewer</h1>
</a>

<div class="mb-8">
  <PresetSubmitForm />
</div>

<div class="container mx-auto px-4">
  <slot />
</div>

<footer class="mt-72">&nbsp;</footer>
