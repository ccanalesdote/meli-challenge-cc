import * as Style from './style';

type Props = {
  description?: string;
};

const descriptionCard = (props: Props) => {

  const { description } = props;

  return (
    <>

      <Style.Container>

        <Style.TitleStyled>Descripción del Producto</Style.TitleStyled>
        <Style.TextStyled>{description}</Style.TextStyled>

      </Style.Container>

    </>
  );
};

export default descriptionCard;
