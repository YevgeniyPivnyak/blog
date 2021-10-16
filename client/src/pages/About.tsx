import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { AppTheme } from "../config/theme";

const useStyles = makeStyles<AppTheme>((theme) => ({
  root: {
    ...theme.page,
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>About blog</h1>
      <Button color="primary">Contained</Button>
    </div>
  );
};
