import React from "react";
import { Paragraph, SectionTitle } from "../CommonStyle";
import {
  Container,
  StyledList,
  StyledListItem,
  Title,
  StyledLink,
} from "./ForCandidates.styled";

const ForCandidates = () => {
  return (
    <Container id="forCandidates">
      <SectionTitle>Dla kandydatów</SectionTitle>
      <Title>Dla kogo:</Title>
      <Paragraph>
        Dla wszystkich osób zaintersowanych poznaniem nowoczesej, pełnej
        możliwości i perspektyw dziedziny wiedzy. Osoby starajace się o
        przyjęcie muszą mieć ukończone studia pierwszego stopnia oraz tytuł
        inżyniera.
      </Paragraph>
      <Title>Jak aplikować:</Title>
      <Paragraph>
        Rekrutacja na rok akademicki 2021/2022 rozpoczyna się 01.06.2021 roku i
        potrwa do 17.07.2021. Więcej na temat formalności związanych z
        rekrutacją znajdziesz na stronie
        <StyledLink
          href="https://wimii.pcz.pl/pl/rekrutacja/procedura-rekrutacji"
          target="_blank"
        >
          Wydziału Inżynierii Mechanicznej i Informatyki.
        </StyledLink>
      </Paragraph>
      <Title>Więcej informacji o kierunku:</Title>
      <StyledList>
        W ramach kierunku prowadzone są dwa zakresy
        <StyledListItem>
          Sztuczna inteligencja - zakres w prowadzony w języku polskim{" "}
        </StyledListItem>
        <StyledListItem>
          Computational intelligence and data science - zakres w prowadzony w
          języku angielskim
        </StyledListItem>
      </StyledList>
      <Paragraph>
        Więcej informacji o kierunku możesz znaleść na stronach
        <StyledLink
          href="https://wimii.pcz.pl/pl/oferta-edukacyjna/sztuczna-inteligencja-i-data-science"
          target="_blank"
        >
          Wydziału Inżynierii Mechanicznej i Informatyki
        </StyledLink>
        lub bezpośredniow
        <StyledLink href="https://www.pcz.pl/pl/file/19315/download?token=MMyWsiQ8">
          w programie studiów.
        </StyledLink>
      </Paragraph>
    </Container>
  );
};

export default ForCandidates;
