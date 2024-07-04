import { Product } from '../../../../models';
import { Price } from '../../atoms/Price';

import * as Style from './style';

type Props = {
  product: Product;
};

const ProductCard = (props: Props) => {

  const { product } = props;

  return (
    <>
      <Style.Container>

        <Style.TextStyled>{product.condition} - {product.sold_quantity} vendidos</Style.TextStyled>
        <Style.TitleStyled>{product.title}</Style.TitleStyled>
        <Style.PriceStyled>
          <Price
            currency={product.price.currency}
            amount={product.price.amount}
            decimals={product.price.decimals} />
        </Style.PriceStyled>
        <Style.ButtonStyled>Comprar</Style.ButtonStyled>

      </Style.Container>
    </>
  );
};

export default ProductCard;
