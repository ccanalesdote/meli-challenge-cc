import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Icon } from '../../atoms/Icon';
import { Input } from '../../atoms/Input';

import * as Style from './style';
import iconPath from '@assets/ic_Search@2x.png';

import { updateSearch } from '../../../../redux/states/search';

const placeholder = 'Nunca dejes de buscar';

const SearchBar = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const setSearchValue = (searchValue: string) => {    
    setValue(searchValue);
    dispatch(updateSearch({ value: searchValue }));
  }

  return (
    <>

      <Style.Container>
        <Style.InputContainer>
          <Input placeholder={placeholder} value={value} onChange={setSearchValue} />
        </Style.InputContainer>
        <Style.IconContainer>
          <Icon src={iconPath} alt="Logo_ML" />
        </Style.IconContainer>
      </Style.Container>

    </>
  );
};

export default SearchBar;
