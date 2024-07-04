import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppStore } from '../../../../redux/store';
import { updateSearch } from '../../../../redux/states/search';

import { Icon } from '../../atoms/Icon';
import { Input } from '../../atoms/Input';

import * as Style from './style';
import iconPath from '@assets/ic_Search@2x.png';

const placeholder = 'Nunca dejes de buscar';

const SearchBar = () => {

  const dispatch = useDispatch();
  const searchState = useSelector((state: AppStore) => state.search);
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(searchState.value);
  }, [searchState.value])

  const handleSearch = () => {
    dispatch(updateSearch({ value }));
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  return (
    <>

      <Style.Container>

        <Style.InputContainer>
          <Input
            placeholder={placeholder}
            value={value}
            onChange={setValue}
            onKeyDown={handleKeyDown}
            ref={inputRef} />
        </Style.InputContainer>
        
        <Style.IconContainer onClick={handleSearch}>
          <Icon src={iconPath} alt="Logo_ML" />
        </Style.IconContainer>

      </Style.Container>

    </>
  );
};

export default SearchBar;
