import { useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as HamburgerIcon } from "./icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "./icon-close.svg";
import { LinkName, LinkNum, LinksList, MobileView, StyledNav } from "./styled";
import { linksData } from "./linksData";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = window.innerWidth > 767;

  const handleToggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <StyledNav show={isOpen}>
      <Logo />
      <LinksList
        variants={{
          hidden: {
            opacity: 0,
            x: -50,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.5 },
          },
        }}
        initial="hidden"
        animate={isDesktop || isOpen ? "visible" : "hidden"}
        exit={"hidden"}
        show={isOpen}
      >
        {linksData.map(link => (
          <motion.li
            variants={{
              hidden: { opacity: 0, scale: 2 },
              visible: { opacity: 1, scale: 1 },
            }}
            exit={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            key={link.name}
          >
            <LinkName to={link.to} onClick={handleLinkClick}>
              <LinkNum>{link.num}</LinkNum>
              {link.name}
            </LinkName>
          </motion.li>
        ))}
      </LinksList>
      <MobileView
        whileTap={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        onClick={handleToggleNav}
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </MobileView>
    </StyledNav>
  );
};

export default Navigation;
