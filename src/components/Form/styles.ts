import styled from "styled-components";

const Container = styled.form`
  align-items: center;
  box-sizing: border-box;
  padding: 40px;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 400px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  ${({ theme }) => theme.mediaQueries.small} {
    margin: 60px auto;
    border: 1.5px solid ${({ theme }) => theme.colors.lightgray};
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  h2 {
    margin-top: 0;
  }
`;

export default Container;
