import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  > h1 {
    text-align: center;
    padding-bottom: 8px;
  }
`;

export const Preview = styled.div`
  display: column;

  h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }

  @media only screen and (min-width: 850px) {
    display: flex;
    gap: 10px;
  }
`;
