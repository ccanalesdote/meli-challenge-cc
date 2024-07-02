import styled from 'styled-components';

export const InputStyled = styled.input`
  box-sizing: border-box;
  font-size: 18px;
  width: 100%;
  height: 100%;
  padding: 10px 60px 10px 15px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1.5px;
  letter-spacing: -0.2px;
  &:focus {
    border-color: #3483FA;
    outline: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;