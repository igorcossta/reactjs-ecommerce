import styled from 'styled-components';

export const Container = styled.div`
  display: column;

  @media only screen and (min-width: 950px) {
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
  }
`;
