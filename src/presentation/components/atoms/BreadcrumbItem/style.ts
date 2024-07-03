import styled from 'styled-components';

type BreadcrumbItemStyledProp = {
  $bold: boolean;
};

export const BreadcrumbItemStyled = styled.span<BreadcrumbItemStyledProp>`
  color: #999999;
  font-size: 14px;
  margin-right: 6px;
  font-weight: ${({ $bold }) => ($bold ? 'bold' : 'normal')};
`;