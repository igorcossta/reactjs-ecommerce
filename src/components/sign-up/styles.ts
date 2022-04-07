import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8%;

  > h2 {
    padding: 10px 0;
  }

  button {
    margin: 0 auto;
  }

  @media only screen and (min-width: 950px) {
    width: 380px;
    margin-top: 0;

    form {
      width: 100%;
    }
  }
`;
