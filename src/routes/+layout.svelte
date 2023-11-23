<script lang="ts">
  import "@south-paw/typeface-minecraft";
  import "../assets/app.css";
  import PresetSubmitForm from "../components/PresetSubmitForm.svelte";
</script>

<a href="/">
  <h1 class="my-8 text-center text-3xl font-bold">NEU Preset Viewer</h1>
</a>

<div class="mb-8">
  <PresetSubmitForm />
</div>

<slot />

<footer class="mt-72">&nbsp;</footer>
