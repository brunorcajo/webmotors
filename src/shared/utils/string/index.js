export const formatCurrency = (val, useAbs) => {
  const value = useAbs ? Math.abs(val) : val;

  const currency = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  return currency.replace(/\u00A0/g, "");
};
