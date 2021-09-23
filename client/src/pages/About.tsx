import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
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
