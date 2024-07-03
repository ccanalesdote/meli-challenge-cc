type Props = {
  currency: string;
  amount: number;
  decimals: number;
};

const Price = (props: Props) => {

  const { currency, amount, decimals } = props;

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimals,
  }).format(amount);

  return (<>{formattedPrice}</>);

};

export default Price;