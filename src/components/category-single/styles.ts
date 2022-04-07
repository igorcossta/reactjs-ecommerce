import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 38px;
    padding-bottom: 10px;
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
