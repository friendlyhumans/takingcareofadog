import styled from "styled-components";

const Container = styled.input`
  display: block;
  font-size: 17px;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 6px;
  margin: 0 auto 10px;
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  background-image: none !important;

  &:-webkit-autofill,
  &:-webkit-autofill:hover {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background}
      inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }
`;

export default Container;
