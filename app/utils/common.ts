export function currencyFormat(num: number) {
  return `Rs. ${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
}
