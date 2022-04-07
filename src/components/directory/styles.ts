import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
