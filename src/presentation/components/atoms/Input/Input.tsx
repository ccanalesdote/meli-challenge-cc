import * as Style from './style';

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const Input = (props: Props) => {

  const { placeholder, value, onChange } = props;

  return (
    <>
      <Style.InputStyled
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
