import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerMain = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;

export const ContainerInfo = styled.div`  
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
`;

export const TextStyled = styled.span`
  color: #333333;
  font-size: 14px;
  line-height: 0.8;
  text-align: start;
`;

export const TitleStyled = styled.span`
  color: #333333;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 16px;
  text-align: start;
`;

export const PriceStyled = styled.span`
  color: #333333;
  font-size: 46px;
  line-height: 0.8;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: start;
  `;

export const ButtonStyled = styled.button`
  background-color: #3483FA;
  border: none;
  border-radius: 4px;
  color: #EEEEEE;
  font-size: 16px;
  padding: 12px 24px;
  cursor: pointer;
`;