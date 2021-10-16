import { makeStyles } from "@mui/styles";
import { AppTheme } from "config/theme";
import { MenuNav } from "components";
import { navigation } from "settings";

const useStyles = makeStyles<AppTheme>((theme) => ({
  root: {
    ...theme.page,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuNav items={navigation} />
    </div>
  );
};
