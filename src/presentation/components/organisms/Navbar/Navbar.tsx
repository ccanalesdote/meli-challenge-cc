import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppStore } from '../../../../redux/store';
import { resetSearch } from '../../../../redux/states/search';

import { Icon } from '../../atoms/Icon';
import { SearchBar } from '../../molecules/SearchBar';

import * as Style from './style';
import logoPath from '@assets/Logo_ML@2x.png';

const Navbar = () => {

  const dispatch = useDispatch();
  const searchState = useSelector((state: AppStore) => state.search);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchState.value) navigate(`/items?search=${searchState.value}`);
  }, [searchState.value])

  const handleClick = () => {
    dispatch(resetSearch());
    navigate('/');
  };

  return (
    <>
      <Style.NavbarStyled>

        <Style.IconContainer onClick={handleClick}>
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
