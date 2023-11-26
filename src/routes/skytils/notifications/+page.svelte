<script lang="ts">
  import notifications from "../../../assets/presets/st_notifications.json";
</script>

<h2 class="my-6 text-2xl font-bold">Custom Notification Presets</h2>
<div class="grid grid-cols-3 gap-4">
  {#each notifications as preset}
    <div class="rounded-md bg-gray-100 p-4">
      <h2 class:italic={!preset.name} class:font-bold={!!preset.name} class="text-xl">
        {preset.name || "Untitled"}
      </h2>
      <p>by {preset.author}</p>

      <p class="mt-2"><b>Trigger Regular Expression</b></p>
      <pre class="overflow-x-scroll"><code>{preset.regex}</code></pre>
      <p class="mt-2"><b>Title</b></p>
      <pre class="overflow-x-scroll"><code>{preset.title}</code></pre>

      <div class="mt-4 flex gap-2">
        <a href={preset.link}>
          <button class="rounded-md px-3 py-1">Source</button>
        </a>
      </div>
    </div>
  {/each}
</div>
