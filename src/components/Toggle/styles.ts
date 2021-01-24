import styled from "styled-components";

const Container = styled.span`
  display: inline-block;

  .switch {
    width: calc(25px * 1.8);
    height: 25px;
    border-radius: 25px;
    padding: 5px;
    display: flex;
    cursor: pointer;
    padding-right: 5px;
    padding-left: 5px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.deeppurple};
    justify-content: ${({ theme }) => theme.toggleDirection};
  }

  .switch div {
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
  }
`;

export default Container;
