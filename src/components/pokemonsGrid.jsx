import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { useStyles } from "../hooks/useStyles";
import PokemonCard from "./pokemonCard";

const PokemonsGrid = (props) => {
  const classes = useStyles();

  const { page, onPageChanged, query, allPokemons } = props;

  const filtered = allPokemons.filter((pokemon) =>
    pokemon.name.match(new RegExp(query, "gi"))
  );
  const first = (page - 1) * 20;
  const last = first + 20 > filtered.length ? filtered.length : first + 20;
  const pokemons = filtered.slice(first, last);

  return (
    <Container className={classes.pokemonGrid} maxWidth="lg">
      {pokemons && (
        <Grid container spacing={4}>
          {pokemons.map((pokemon) => (
            <Grid item key={pokemon.name} xs={12} sm={6} md={3}>
              <Card
                className={classes.card}
                onClick={() => {
                  props.onPokemonSelected(pokemon);
                }}
              >
                <PokemonCard pokemon={pokemon} />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    {pokemon.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Pagination
        size="large"
        style={{ margin: "10px 0", padding: "20px 0" }}
        count={Math.ceil(filtered.length / 20)}
        page={page}
        onChange={onPageChanged}
      />
    </Container>
  );
};

export default PokemonsGrid;
