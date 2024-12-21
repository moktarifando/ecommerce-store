export function formattedPriceNumber(input: number | string | undefined) {
  if (input === undefined) {
    return "Rp0,00";
  }
  let numberValue: number;

  if (typeof input === "string") {
    numberValue = parseFloat(input);
    if (isNaN(numberValue)) {
      return "Rp0,00";
    }
  } else {
    numberValue = input;
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  }).format(numberValue);
}
