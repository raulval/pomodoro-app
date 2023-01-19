import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};

  gap: 4rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary.text};
  font-weight: 600;
`;
