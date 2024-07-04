import { useEffect, useState } from "react";

type Props = {
  currency: string;
  amount: number;
  decimals: number;
};

const Price = (props: Props) => {

  const { currency, amount, decimals } = props;
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isValidPrice =
      currency !== null && currency !== '' &&
      amount !== null && amount !== undefined &&
      decimals !== null && decimals !== undefined;

    setIsValid(isValidPrice);
  }, [currency, amount, decimals]);

  const formattedPrice = isValid ? new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimals,
  }).format(amount) : '';

  return (
    <>
      {formattedPrice}
    </>
  );

};

export default Price;