import * as Style from './style';

const descriptionCard = () => {

  return (
    <>

      <Style.Container>

        <Style.TextContainer>
          <Style.TitleStyled>No hay publicaciones que coincidan con tu búsqueda.</Style.TitleStyled>
          <Style.TextStyled>
            <ul>
              <li><b>Revisa la ortografía</b> de la palabra.</li>
              <li>Utiliza <b>palabras más genéricas</b> o menos palabras.</li>
              <li>Navega por las categorías para encontrar un producto similar</li>
            </ul>
          </Style.TextStyled>
        </Style.TextContainer>

      </Style.Container>

    </>
  );
};

export default descriptionCard;
