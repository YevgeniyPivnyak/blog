import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../config/theme";

const useStyles = makeStyles<AppTheme>((theme) => ({
  root: {
    display: "flex",
    background: theme.palette.primary.light,
    margin: "0",
    padding: "0",
    "& li": {
      listStyle: "none",
    },
    "& a": {
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
      textDecoration: "none",
      display: "block",
      padding: "15px",
    },
    "& a.active": {
      background: theme.palette.primary.dark,
    },
  },
}));

export const MenuNav = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/post-edit">
          Edit Post
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/about">
          About
        </NavLink>
      </li>
    </ul>
  );
};
