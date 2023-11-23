<script lang="ts">
  type CustomTodo = {
    label: string;
    timer: number;
    trigger: string;
    icon: string;
    isResetOffset: boolean;
    triggerTarget: "CHAT" | "ACTIONBAR" | "TAB_LIST" | "SIDEBAR";
    triggerMatcher: "REGEX" | "STARTS_WITH" | "CONTAINS" | "EQUALS";
  };

  export let content: CustomTodo;
</script>

<div class="prose">
  <h2 class="text-2xl font-bold">Custom TODO Preset</h2>
  <table>
    <tbody>
      <tr>
        <td>Label</td>
        <td>{content.label}</td>
      </tr>
      <tr>
        <td>Timer</td>
        <td>{content.timer} seconds</td>
      </tr>
      <tr>
        <td>Trigger Type</td>
        <td class="capitalize"
          >{content.triggerMatcher === "REGEX"
            ? "Regular Expression"
            : content.triggerMatcher.toLowerCase().replaceAll(/_/g, " ")}</td>
      </tr>
      <tr>
        <td>Trigger Target</td>
        <td class="capitalize">{content.triggerTarget.toLowerCase().replaceAll(/_/g, " ")}</td>
      </tr>
      <tr>
        <td>Trigger</td>
        <td><pre><code>{content.trigger}</code></pre></td>
      </tr></tbody>
  </table>
</div>
