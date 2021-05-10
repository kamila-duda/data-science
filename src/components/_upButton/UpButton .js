import React, { useEffect, useState } from "react";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon, StyledText, StyledUpButton } from "./styled";

const UpButton = () => {
  const [hide, setHide] = useState(true);
  const offsetTop = () => {
    window.pageYOffset > 1000 ? setHide(false) : setHide(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", offsetTop);
    return () => window.removeEventListener("scroll", offsetTop);
  }, []);

  return (
    <StyledUpButton
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      hide={hide ? "hide" : ""}
    >
      <StyledFontAwesomeIcon icon={faAngleDoubleUp} />
      <StyledText>Up</StyledText>
    </StyledUpButton>
  );
};

export default UpButton;
