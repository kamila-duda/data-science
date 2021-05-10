import React from "react";
import { SectionTitle, Paragraph } from "../CommonStyle";
import { Container, StyledList, StyledListItem } from "./Information.styled";

const Information = () => {
  return (
    <Container>
      <SectionTitle>Informacje o kierunku</SectionTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis risus
        massa vulputate donec a. Lorem eget risus imperdiet a hendrerit. Quis
        duis consequat, gravida facilisis fermentum venenatis ac. Id sit
        consectetur malesuada volutpat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Mattis risus massa vulputate donec a. Lorem eget risus
        imperdiet a hendrerit. Quis duis consequat, gravida facilisis fermentum
        venenatis ac. Id sit consectetur malesuada volutpat.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis risus
        massa vulputate donec a. Lorem eget risus imperdiet a hendrerit. Quis
        duis consequat, gravida facilisis fermentum venenatis ac. Id sit
        consectetur malesuada volutpat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Mattis risus massa vulputate donec a. Lorem eget risus
        imperdiet a hendrerit. Quis duis consequat, gravida facilisis fermentum
        venenatis ac. Id sit consectetur malesuada volutpat. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Mattis risus massa vulputate
        donec a. Lorem eget risus imperdiet a hendrerit. Quis duis consequat,
        gravida facilisis fermentum venenatis ac. Id sit consectetur malesuada
        volutpat.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis risus
        massa vulputate donec a. Mattis risus massa vulputate donec a. Lorem
        eget risus imperdiet a hendrerit. Quis duis consequat, gravida facilisis
        fermentum venenatis ac. Id sit consectetur malesuada volutpat.
      </Paragraph>
      <StyledList>
        <StyledListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis risus
          massa vulputate risus imperdiet a hendrerit. Id sit consectetur
          malesuada volutpat.
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis risus
          massa vulputate risus imperdiet a hendrerit. Quis duis consequat,
          gravida facilisis fermentum venenatis ac.{" "}
        </StyledListItem>
        <StyledListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis risus
          massa vulputate risus imperdiet a hendrerit. Q
        </StyledListItem>
      </StyledList>
    </Container>
  );
};

export default Information;