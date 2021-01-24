import styled from "styled-components";

const Container = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 40px auto;

  li {
    list-style: none;
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.lightgray};
    padding: 20px 0 10px;
  }

  h2 {
    margin-top: 0;
  }
`;

export default Container;
