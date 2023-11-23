<form
  class="mx-auto flex max-w-max justify-center gap-4 rounded-lg bg-blue-50 px-8 py-6"
  method="POST"
  action="/preset">
  <label for="presetInput">Enter an NEU preset string:</label>
  <input type="text" name="preset" id="presetInput" class="w-40 border-b" />
  <button
    type="submit"
    class="rounded-md bg-blue-500 px-3 py-1 text-white transition-colors hover:bg-blue-600 active:bg-blue-700">
    Preview
  </button>
</form>
