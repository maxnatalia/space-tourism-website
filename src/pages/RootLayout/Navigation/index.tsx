import { useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as HamburgerIcon } from "./icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "./icon-close.svg";
import { LinkName, LinkNum, LinksList, MobileView, StyledNav } from "./styled";
import { linksData } from "./linksData";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <StyledNav show={isOpen}>
      <Logo />
      <LinksList show={isOpen}>
        {linksData.map(link => (
          <li key={link.name}>
            <LinkName to={link.to} onClick={handleLinkClick}>
              <LinkNum>{link.num}</LinkNum>
              {link.name}
            </LinkName>
          </li>
        ))}
      </LinksList>
      <MobileView onClick={handleToggleNav}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </MobileView>
    </StyledNav>
  );
};

export default Navigation;
