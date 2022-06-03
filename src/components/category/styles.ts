import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  > h1 {
    text-align: center;
    width: 50%;
    padding-bottom: 8px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Preview = styled.div`
  display: column;
  min-width: 100%;

  h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }

  @media only screen and (min-width: 850px) {
    display: flex;
    gap: 10px;
  }
`;
