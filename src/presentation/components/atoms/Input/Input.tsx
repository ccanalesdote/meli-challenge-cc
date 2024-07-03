import React from 'react';
import * as Style from './style';

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = (props: Props, ref: React.Ref<HTMLInputElement>) => {

  const { placeholder, value, onChange, onKeyDown } = props;

  return (
    <>
      <Style.InputStyled
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        ref={ref}
      />
    </>
  );
};

export default React.forwardRef(Input);
