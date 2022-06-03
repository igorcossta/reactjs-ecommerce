import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0;

  button {
    margin-top: 10px;
  }

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  a {
    font-size: 1.333rem;
    border-bottom: 1px solid #c1c1c1;
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
