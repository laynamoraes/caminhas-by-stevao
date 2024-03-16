import styled, { css } from "styled-components"
import { ButtonVariant } from "."

interface ButtonProps {
  variant?: ButtonVariant
}

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  /* max-width: 112px; */
  background-color: #c1dcdc;
  color: #1e1e1e;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in;

  ${(props) =>
    props.variant === ButtonVariant.secondary &&
    css`
      background-color: transparent;
      border: 2px solid #1e1e1e;
    `}

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.variant !== ButtonVariant.default ? "#1e1e1e" : "#a7cccc"};

    color: ${(props) =>
      props.variant !== ButtonVariant.default ? "#fff" : "#1e1e1e"};
  }
`
