import { Link } from "react-router-dom";
import {
  NavContainer,
  LogoNav,
  LogoText,
  TabsNav,
  TabNav,
} from "./navBarStyledComponents";
import { FaCookieBite } from "react-icons/fa";

const NavBar = () => {
  return (
    <NavContainer>
      <LogoNav>
        <FaCookieBite />
        <LogoText>CreatedbyLukas</LogoText>
      </LogoNav>
      <TabsNav>
        <TabNav as={Link} to="/resume">
          Home
        </TabNav>
        <TabNav as={Link} to="/education">
          Education
        </TabNav>

        <TabNav as={Link} to="/skills">
          Skills
        </TabNav>

        <TabNav as={Link} to="/portfolio">
          Portfolio
        </TabNav>

        <TabNav as={Link} to="/contacts">
          Contacts
        </TabNav>
      </TabsNav>
    </NavContainer>
  );
};

export default NavBar;
