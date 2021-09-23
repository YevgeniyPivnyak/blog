import { createTheme } from "@material-ui/core/styles";
import { Theme } from "@material-ui/system";
import { CSSProperties } from "react";

const theme = {
  page: {
    width: "1000px",
    margin: "auto",
  },
};

type CustomTheme = {
  // [Key in keyof typeof theme]: typeof theme[Key];
  page: {
    width: CSSProperties["width"];
    margin: CSSProperties["margin"];
  };
};

declare module "@material-ui/core/styles/createTheme" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export type AppTheme = Theme & CustomTheme;

export default createTheme(theme);
