import * as Style from './style';

type Props = {
  src: string;
  alt: string;
  size: number;
};

const Image = (props: Props) => {

  const { src, alt, size } = props;

  return <Style.ImageStyled $size={size} src={src} alt={alt} />;

};

export default Image;