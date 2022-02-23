import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { primary, secondary } from "../assets/css/variables";

export const Card = styled.div`
  padding: 2em;
  background-color: #edeeef;
`;

export const CardTitle = styled.h5`
  color: ${primary};
`;

export const CardText = styled.p`
  color: #6a6868;
  font-weight: 500;
`;

export const BtnItinerario = styled.button`
  background-color: ${primary};
  color: #fff;
  &&:hover {
    background-color: ${secondary};
    color: #fff;
  }
`;

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  height: 24px;
  margin-right: 1em;
`;

const CardTransporte = (props) => {
  return (
    <Card className="card">
      <CardTitle>{props.id}</CardTitle>
      <CardText>{props.nome}</CardText>
      <Link to={`${props.url}`}>
        <BtnItinerario className="btn">
          <Icon viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"
            />
          </Icon>
          {props.title}
        </BtnItinerario>
      </Link>
    </Card>
  );
};

export default CardTransporte;
