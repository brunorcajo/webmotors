import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border: solid 1px ${({ theme }) => theme.colors.silverChalice};
  border-radius: ${({ theme }) => theme.configs.borderRadiusDefault}px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 10px;
`;

export const Input = styled.input.attrs({ type: "text" })`
  border: none;
  padding: 11px 20px 10px 10px;
  font-size: 1rem;
  flex: 1;
  width: 100%;
`;

export const LabelBefore = styled.div`
  color: ${({ theme }) => theme.colors.silverChalice};
`;

export const Cleanup = styled.div`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.silverChalice};
  cursor: pointer;
`;

export const Icon = styled.div.attrs({ className: "icon" })`
  margin-top: 3px;
  opacity: 0.5;
`;
