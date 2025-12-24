export function getDetails() {
  console.log("Getting details...");
}

export function addPayment(amount: number) {
  console.log("Payment added:", amount);
}

export default function print() {
  console.log("Default export from payment.ts");
}
