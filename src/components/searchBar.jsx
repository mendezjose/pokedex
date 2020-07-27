import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import { useStyles } from "../hooks/useStyles";

const SearchBar = (props) => {
  const { onChange } = props;

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Container maxWidth="lg">
        <TextField
          id="outlined-full-width"
          label="Buscar"
          fullWidth
          margin="normal"
          onKeyUp={onChange}
          variant="outlined"
        />
      </Container>
    </AppBar>
  );
};

export default SearchBar;
