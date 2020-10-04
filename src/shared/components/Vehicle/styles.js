import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.configs.borderRadiusDefault}px;
  background-color: white;
  box-shadow: 4px 4px 13px -5px rgba(0, 0, 0, 0.42);
  max-width: 300px;
  min-height: 360px;

  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 100%;
    align-self: center;
    justify-self: center;
  }
`;

export const Photo = styled.div`
  border-top-left-radius: ${({ theme }) => theme.configs.borderRadiusDefault}px;
  border-top-right-radius: ${({ theme }) => theme.configs.borderRadiusDefault}px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  height: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
`;

export const Name = styled.div`
  text-transform: uppercase;
`;

export const Version = styled.div`
  opacity: 0.6;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
`;

export const Year = styled.div`
  font-weight: 300;
  font-style: italic;
  font-size: 1rem;
`;

export const Footer = styled.div`
  margin-top: auto;
`;
