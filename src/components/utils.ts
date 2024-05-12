export function calculateMonthlyPayment(P: number, r: number, n: number): number {
  const monthlyInterestRate: number = r / 12 // Monthly interest rate
  const discountFactor: number = (1 - Math.pow(1 + monthlyInterestRate, -n))
  const monthlyPayment: number = (P * monthlyInterestRate) / discountFactor
  return monthlyPayment
}
