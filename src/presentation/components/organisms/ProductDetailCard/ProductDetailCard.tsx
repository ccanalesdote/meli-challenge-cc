import { Image } from '../../atoms/Image';
import { Product } from '../../../../models';

import * as Style from './style';
import { DescriptionCard } from '../../molecules/DescriptionCard';

type Props = {
  product: Product;
};

const ProductCard = (props: Props) => {

  const { product } = props;

  return (
    <>

      <Style.Container>

        <Style.ContainerMain>

          <Style.ImageContainer>
            <Image size={680} src={product.picture} alt={product.title} />
          </Style.ImageContainer>

          <DescriptionCard description={product.description} />

        </Style.ContainerMain>

        <Style.ContainerInfo>

          <Style.TextStyled>{product.condition} - {product.sold_quantity} vendidos</Style.TextStyled>
          <Style.TitleStyled>{product.title}</Style.TitleStyled>
          <Style.PriceStyled>$&nbsp;{product.price.amount}</Style.PriceStyled>
          <Style.ButtonStyled>Comprar</Style.ButtonStyled>

        </Style.ContainerInfo>

      </Style.Container>

    </>
  );
};

export default ProductCard;
