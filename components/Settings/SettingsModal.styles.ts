import { MdClose } from "react-icons/md";
import styled, { DefaultTheme } from "styled-components";

interface ModalStylesProps {
  active: boolean;
  theme: DefaultTheme;
  color?: string;
}

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 1.875rem;
  border-radius: 25px;
  width: 35%;
  max-height: 80%;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 90%;
    overflow-y: auto;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.h2`
  color: ${(props) => props.theme.colors.terciary.text};
  font-size: 1.8rem;
`;

export const CloseIcon = styled(MdClose)`
  color: ${(props) => props.theme.colors.terciary.text};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.secondary.main};
  }
`;

export const ModalSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e3ec;
  margin: 1.875rem 0;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ModalText = styled.p`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 6px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ModalTimeInputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ModalTimeInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalTimeInputLabel = styled.label`
  text-align: start;
  font-size: 12px;
  font-weight: 600;
  color: #b5b7c0;
  text-transform: lowercase;
  margin-bottom: 0.5rem;
`;

export const ModalTimeInput = styled.input`
  width: 100%;
  min-width: 0px;
  outline: none;
  appearance: none;
  transition: all 0.2s ease 0s;
  font-size: 0.875rem;
  font-weight: 600;
  padding-inline-start: 1rem;
  padding-inline-end: calc(1.5rem + 0.5rem);
  height: 2.5rem;
  border-radius: 0.375rem;
  vertical-align: top;
  border-width: 2px;
  border-style: solid;
  border-image: initial;
  border-color: transparent;
  background: #eff1fa;
  color: ${(props) => props.theme.colors.terciary.text};
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const ModalPresets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const ModalPresetsButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ModalPresetsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  border: none;
  border-radius: 50%;
  min-width: 60px;
  min-height: 60px;
  color: ${(props: ModalStylesProps) =>
    props.active ? "#fff" : props.theme.colors.terciary.text};
  background: ${(props: ModalStylesProps) =>
    props.active ? props.theme.colors.terciary.text : "#eff1fa"};
  transition: background-color 0.1s ease-in 0s;
`;

export const ModalColors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const ModalColorsButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ModalColorButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  border-radius: 50%;
  min-width: 60px;
  min-height: 60px;
  border: ${(props: ModalStylesProps) =>
    props.active ? `4px solid ${props.theme.colors.terciary.text}` : "none"};
  transition: background-color 0.1s ease-in 0s;
`;

export const ModalApply = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalApplyButton = styled.button`
  width: 200px;
  cursor: pointer;
  border: none;
  line-height: 1.2;
  border-radius: 26.5px;
  font-weight: 600;
  font-size: 1rem;
  padding-inline: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: ${(props) =>
    props.color === "color1"
      ? props.theme.themes.color1
      : props.color === "color2"
      ? props.theme.themes.color2
      : props.theme.themes.color3};
  color: #eff1fa;
  transition: all 250ms ease 0s;
`;
