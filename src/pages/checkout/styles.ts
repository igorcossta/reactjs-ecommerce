import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-top: 10px;
  }

  & > svg {
    width: 80%;
    height: 80%;
  }

  h3 {
    margin-bottom: 5%;
    font-weight: 400;
  }

  @media only screen and (min-width: 600px) {
    width: 55%;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const Title = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const Warning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
