import styled from 'styled-components';

type ImageStyledProp = {
  $size: number;
};

export const ImageStyled = styled.img<ImageStyledProp>`
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  border-radius: 4px;
  object-fit: cover;
`;