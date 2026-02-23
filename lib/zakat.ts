export function calculateZakat({
  cash,
  bank,
  gold,
  investments,
  debts,
}: {
  cash: number
  bank: number
  gold: number
  investments: number
  debts: number
}) {
  const total = cash + bank + gold + investments - debts
  const zakat = total * 0.025

  return {
    total,
    zakat,
  }
}