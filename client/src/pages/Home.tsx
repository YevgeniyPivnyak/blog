import { useTheme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: any) => {
  console.log("GGGGGGGGGGGGGGGGGGGGGG", theme);
  return createStyles({
    root: {
      //color: theme.palette.primary.main,
    },
  });
});

export const Home = () => {
  const theme = useTheme();

  const classes = useStyles(theme);

  return <h1 className={classes.root}>Home blog</h1>;
};
