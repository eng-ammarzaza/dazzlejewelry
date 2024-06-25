export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function capitalizeFLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
