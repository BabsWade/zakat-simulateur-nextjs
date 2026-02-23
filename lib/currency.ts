export const formatFCFA = (value: number) =>
  new Intl.NumberFormat("fr-SN", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(value)

  export function format1FCFA(amount: number) {
  return new Intl.NumberFormat("fr-FR").format(amount) + " F CFA"
}