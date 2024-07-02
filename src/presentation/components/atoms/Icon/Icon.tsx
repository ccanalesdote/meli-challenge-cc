import * as Style from './style';

type Props = {
  src: string;
  alt: string;
};

// const Icon = ({ src, alt }) => {
const Icon = (props: Props) => {

  const { src, alt } = props;

  return <Style.IconStyled src={src} alt={alt} />;

};

export default Icon;