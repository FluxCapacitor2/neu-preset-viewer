export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const preset = data.get("preset");
    return { preset };
  },
};
