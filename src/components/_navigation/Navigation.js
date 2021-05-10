import React, { useState } from "react";
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledNavListMobile,
  StyledIcon,
  StyledHomeWrapper,
  Language,
} from "./Navigation.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    "Informacje",
    "Zalety",
    "Przedmioty",
    "Prowadzący",
    "Kontakt",
  ];

  return (
    <StyledNav>
      <StyledHomeWrapper>
        <FontAwesomeIcon
          icon={faHome}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <Language>PL</Language>
        <span>|</span>
        <Language>EN</Language>
      </StyledHomeWrapper>
      <StyledNavList>
        {sections.map((section, index) => {
          return (
            <StyledNavItem key={index}>
              <StyledNavLink>{section}</StyledNavLink>
            </StyledNavItem>
          );
        })}
      </StyledNavList>
      <StyledNavListMobile open={isOpen}>
        {sections.map((section, index) => {
          return (
            <StyledNavItem mobile key={index}>
              <StyledNavLink
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {section}
              </StyledNavLink>
            </StyledNavItem>
          );
        })}
        <StyledIcon onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </StyledIcon>
      </StyledNavListMobile>
    </StyledNav>
  );
};
export default Navigation;
