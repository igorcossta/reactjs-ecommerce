import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    padding-bottom: 8px;
    text-align: center;
  }
`;

export const Items = styled.div`
  display: column;

  @media only screen and (min-width: 850px) {
    display: flex;
    gap: 10px;
  }
`;
