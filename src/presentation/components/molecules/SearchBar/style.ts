import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, .2));
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 44px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow: hidden;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 44px;
  background-color: #EEEEEE;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  &&:hover {
    background-color: #E1E1E1;
  }
`;