import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { AppTheme } from "../config/theme";

const useStyles = makeStyles<AppTheme>((theme) => ({
  root: {
    ...theme.page,
  },
}));

export const PostEdit = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Post Edit</h1>
      <Button color="primary">Contained</Button>
    </div>
  );
};
