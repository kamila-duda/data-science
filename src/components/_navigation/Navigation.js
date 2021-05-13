import React, { useState } from "react";
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavListMobile,
  StyledIcon,
  StyledHomeWrapper,
  Language,
} from "./Navigation.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lenguage, setLenguage] = useState("pl");

  const sections = [
    { navItem: "Informacje", scrollTo: "information" },
    { navItem: "Zalety", scrollTo: "benefits" },
    { navItem: "Przedmioty", scrollTo: "subjects" },
    { navItem: "Prowadzący", scrollTo: "teachers" },
    { navItem: "Kontakt", scrollTo: "contact" },
  ];

  return (
    <StyledNav>
      <StyledHomeWrapper>
        <FontAwesomeIcon
          icon={faHome}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ cursor: "pointer", marginRight: "10px" }}
        />
        <Language onClick={() => setLenguage("pl")}>PL</Language>
        <span>|</span>
        <Language onClick={() => setLenguage("en")}>EN</Language>
      </StyledHomeWrapper>
      <StyledNavList>
        {sections.map((section, index) => {
          return (
            <li key={index}>
              <StyledNavItem
                to={section.scrollTo}
                spy={true}
                smooth={true}
                activeClass="active"
              >
                {section.navItem}
              </StyledNavItem>
            </li>
          );
        })}
      </StyledNavList>
      <StyledNavListMobile open={isOpen}>
        {sections.map((section, index) => {
          return (
            <li mobile="true" key={index}>
              <StyledNavItem
                to={section.scrollTo}
                spy={true}
                smooth={true}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {section.navItem}
              </StyledNavItem>
            </li>
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
