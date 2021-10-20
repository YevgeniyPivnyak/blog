/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  link: string;
}

export const MenuItem = ({ title, link }: Props) => (
  <li
    css={css`
      list-style: none;
    `}
  >
    <NavLink
      css={css`
        padding: 15px;
        text-decoration: none;
        text-transform: uppercase;
        display: block;
        color: white;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        &.active {
          background: red;
        }
      `}
      exact
      to={link}
    >
      {title}
    </NavLink>
  </li>
);
