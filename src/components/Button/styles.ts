import styled from "styled-components";

const Container = styled.button`
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 48px;
  border: 1px solid transparent;
  border-radius: 6px;
  box-sizing: border-box;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.midgray};
    color: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.lightgray};
    color: ${({ theme }) => theme.colors.midgray};
    cursor: default;
  }
`;

export default Container;
