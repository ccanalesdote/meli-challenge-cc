import { Image } from '../../atoms/Image';
import { Icon } from '../../atoms/Icon';
import { Price } from '../../atoms/Price';
import { Product } from '../../../../models';

import * as Style from './style';
import shippingPath from '@assets/ic_shipping@2x.png';

type Props = {
  product: Product;
  openDetail: (id: string) => void;
};

const ProductCard = (props: Props) => {

  const { product, openDetail } = props;

  return (
    <>

      <Style.CardContainer>

        <Style.ImageContainer onClick={() => openDetail(product.id)}>
          <Image size={180} src={product.picture} alt={product.title} />
        </Style.ImageContainer>

        <Style.InfoContainer>

          <Style.PriceContainer>

            <Style.PriceStyled onClick={() => openDetail(product.id)}>
              <Price
                currency={product.price.currency}
                amount={product.price.amount}
                decimals={product.price.decimals} />
            </Style.PriceStyled>

            {
              product.free_shipping &&
              <Style.IconContainer>
                <Icon src={shippingPath} alt="shipping" />
              </Style.IconContainer>
            }

          </Style.PriceContainer>

          <Style.TitleContainer>
            <Style.TitleStyled onClick={() => openDetail(product.id)}>{product.title}</Style.TitleStyled>
          </Style.TitleContainer>

        </Style.InfoContainer>

        <Style.LocationStyled>{product.location}</Style.LocationStyled>
      </Style.CardContainer>

    </>
  );
};

export default ProductCard;
