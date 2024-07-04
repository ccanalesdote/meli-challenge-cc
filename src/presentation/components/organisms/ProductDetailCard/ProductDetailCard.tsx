import { Image } from '../../atoms/Image';
import { Product } from '../../../../models';

import * as Style from './style';

import { DescriptionCard } from '../../molecules/DescriptionCard';
import { Information } from '../../molecules/Information';

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

          <Information product={product} />

        </Style.ContainerInfo>

      </Style.Container>

    </>
  );
};

export default ProductCard;
