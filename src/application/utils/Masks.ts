export const masks = {
  dayAndMonth: (value?: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");

    value = value.replace(/(\d{2})([0-9])/, "$1/$2");
    value = value.replace(/(\d{2})([0-9])/, "$1/$2");

    return value.slice(0, 5);
  },
};
