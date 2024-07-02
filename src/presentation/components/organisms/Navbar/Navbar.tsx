import { Icon } from '../../atoms/Icon';
import { SearchBar } from '../../molecules/SearchBar';

import * as Style from './style';
import logoPath from '@assets/Logo_ML@2x.png';

const Navbar = () => {

  return (
    <>
      <Style.NavbarStyled>

        <Style.IconContainer>
          <Icon src={logoPath} alt="Logo_ML" />
        </Style.IconContainer>

        <Style.SearchBarContainer>
          <SearchBar />
        </Style.SearchBarContainer>

      </Style.NavbarStyled>
    </>
  );
};

export default Navbar;
