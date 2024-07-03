import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PriceContainer = styled.div`
  display: flex;
  margin: 16px;
  height: 20px;
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;  
  width: 100%;
  margin: 16px;
`;

export const TitleStyled = styled.span`
  font-size: 18px;
  line-height: 0.8;
  margin-top: 16px;
  color: #333333;
  cursor: pointer;
`;

export const PriceStyled = styled.span`
  line-height: 0.8;
  font-size: 24px;
  color: #333333;
  cursor: pointer;
`;

export const LocationStyled = styled.span`
  display: flex;
  padding-top: 16px;
  justify-content: center;
  width: 20rem;
  font-size: 12px;
  color: #999;
`;

export const IconContainer = styled.div`  
  display: flex;
  margin-left: 12px;
  align-items: flex-start;
  height: 40px;
`;