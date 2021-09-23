import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../config/theme";
import { MenuNav } from "../MenuNav";

const useStyles = makeStyles<AppTheme>((theme) => ({
  root: {
    ...theme.page,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuNav />
    </div>
  );
};
