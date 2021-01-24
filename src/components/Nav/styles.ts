import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.lightgray};
  padding: 0 20px;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.2);
  text-align: center;
  top: 0;
  height: 50px;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h5 {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    h5 {
      display: block;
    }
  }

  h1 a:hover {
    text-decoration: none;
  }
`;

export default Container;
