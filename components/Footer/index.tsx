import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectColors } from "../../redux/reducers/colors";
import { userSettings } from "../../shared/interfaces";
import { getLocalStorage } from "../../shared/utils/getLocalStorage";

const Footer = () => {
  const { color } = useSelector(selectColors);
  const [userSettings, setUserSettings] = useState<userSettings>();

  useEffect(() => {
    setUserSettings(getLocalStorage("settings"));
  }, [color]);

  return (
    <footer>
      <FooterText>
        Made with ❤️ by{" "}
        <FooterLink
          color={userSettings ? userSettings.color : color}
          href="https://www.linkedin.com/in/raulval/"
          target="_blank"
        >
          Raul Val
        </FooterLink>
      </FooterText>
    </footer>
  );
};

export const FooterText = styled.p`
  color: ${(props) => props.theme.colors.primary.text};
`;

export const FooterLink = styled(Link)`
  color: ${(props) =>
    props.color === "color1"
      ? props.theme.themes.color1
      : props.color === "color2"
      ? props.theme.themes.color2
      : props.color === "color3"
      ? props.theme.themes.color3
      : props.theme.themes.color1};
  text-decoration: none;
`;

export default Footer;
