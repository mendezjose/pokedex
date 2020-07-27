import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%", // 1:1
  },
  cardContent: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white !important",
    position: "fixed",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    boxShadow: "none",
  },
  pokemonGrid: {
    marginTop: theme.spacing(10),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    position: "absolute",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    border: `solid 2px #2b2b2b`,
    borderRadius: `5px`,
    outline: `none`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    marginBottom: `20px !important`,
    top: `50%`,
    left: `50%`,
    width: `70vw`,
    transform: `translate(-50%, -50%)`,
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    textTransform: `capitalize`,
    color: `#2b2b2b`,
  },
  pokemonData: {
    display: "flex",
  },
  closeIcon: {
    cursor: `pointer`,
    float: `right`,
    marginRight: `-15px`,
    width: `18px`,
  },
}));
