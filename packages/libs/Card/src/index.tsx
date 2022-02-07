import React from "react";
import { Card as CardCmp, CardText, CardParagraph,LinkRepositorio,LinkText } from "./styles";

export const Card = () => {
  return (
    <CardCmp>
      <CardText>Component Compartilhado</CardText>
      <CardParagraph>Este component é compartilhado para aplicação web e mobile</CardParagraph>
      <LinkRepositorio>
        <LinkText>Repositório</LinkText>
      </LinkRepositorio>
    </CardCmp>
  );
};
