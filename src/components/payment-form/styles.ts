import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 100px;
  min-width: 500px;

  h2 {
    margin-bottom: 25px;
  }

  button {
    margin-left: auto;
    margin-top: 30px;
  }
`;
