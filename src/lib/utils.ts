export function formatVND(amount: number): string {
  return amount.toLocaleString('vi-VN') + ' ₫'
}

export function formatVNDShort(amount: number): string {
  if (amount >= 1_000_000) {
    return (amount / 1_000_000).toFixed(1).replace('.0', '') + 'M ₫'
  }

  return (amount / 1_000).toFixed(0) + 'K ₫'
}
