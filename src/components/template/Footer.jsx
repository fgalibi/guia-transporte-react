import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 25px;
  background-color: #414141;
  color: #fff;
`;

const AppFooter = () => {
  return (
    <Footer>
      <span>
        Desenvolvido por <strong>Fabrícia Galibi</strong>
      </span>
    </Footer>
  );
};
export default AppFooter;
