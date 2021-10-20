/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { PostInerface } from "../interfaces";

interface Props {
  data: PostInerface;
}

export const Post = ({ data: { title, link } }: Props) => (
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
