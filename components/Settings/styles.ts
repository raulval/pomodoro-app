import { MdSettings } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingsIcon = styled(MdSettings)`
  color: ${(props) => props.theme.colors.primary.text};
  cursor: pointer;
  transition: color 0.2s ease 0s;

  &:hover {
    color: ${(props) => props.theme.colors.secondary.text};
  }
`;
