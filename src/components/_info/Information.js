import React from "react";
import { SectionTitle, Paragraph } from "../CommonStyle";
import Wave1 from "../../../src/assets/svg/wave1.svg";
import {
  Container,
  StyledList,
  StyledListItem,
  Wave,
} from "./Information.styled";

const Information = () => {
  return (
    <Container id="information">
      <SectionTitle>Informacje o kierunku</SectionTitle>
      <Paragraph>
        Zaproponowany program jest odpowiedzią na rosnącą w przemyśle potrzebę
        coraz większej liczby ekspertów znających techniki przetwarzania danych.
      </Paragraph>
      <Paragraph>
        Program studiów uwzględnia zarówno zagadnienia analizy danych (analizę
        statystyczną, uczenie maszynowe, inteligencję obliczeniową, czy metody
        uczenia głębokiego) jak i różne metody dostępu do danych. Absolwent
        będzie znał zarówno teoretyczne podstawy różnych współczesnych metod
        analizy danych, jak i będzie potrafił wykorzystać te metody na różnych
        polach, takich jak analiza danych złożonych (tekst, dźwięk, obraz),
        analiza danych medycznych, zastosowania w ekonomii, czy w robotyce.
        Uczestnicy poznają najnowsze narzędzia przetwarzania danych, jak i
        rozwiązania aktualnie proponowane w światowej literaturze. Studenci
        poznają również metody prowadzenia badań naukowych. Będzie to solidną
        podstawą do kontynuowania nauki w ramach Szkoły Doktorskiej prowadzonej
        na Politechnice Częstochowskiej, lub w innych ośrodkach naukowych w
        kraju i zagranicą.
      </Paragraph>
      <Paragraph>Absolwent może znaleźć pracę w:</Paragraph>
      <StyledList>
        <StyledListItem>instytucjach finansowych, </StyledListItem>
        <StyledListItem>centrach badawczych,</StyledListItem>
        <StyledListItem>
          firmach przetwarzających wielkie zbiory danych (ang. Big Data).
        </StyledListItem>
      </StyledList>
      <Wave src={Wave1} />
    </Container>
  );
};

export default Information;
