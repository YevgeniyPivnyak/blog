/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@mui/material";
import { AppTheme } from "config/theme";
import { MenuItem } from "./components";

interface Item {
  id: number;
  title: string;
  link: string;
}
interface Props {
  items: ReadonlyArray<Item>;
}

export const MenuNav = ({ items }: Props) => {
  const theme: AppTheme = useTheme();

  return (
    <ul
      css={css`
        display: flex;
        padding: 0;
        margin: 0;
        background: ${theme.palette.info.light};
      `}
    >
      {items.map(({ id, title, link }: Item) => (
        <MenuItem key={id} title={title} link={link} />
      ))}
    </ul>
  );
};
