import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    padding: 10px 0;
  }

  @media only screen and (min-width: 950px) {
    width: 380px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
