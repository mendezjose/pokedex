import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { useStyles } from "../hooks/useStyles";

const PokemonCard = (props) => {
  const classes = useStyles();

  const pokemonUrl = props.pokemon.url.slice(0, -1);

  const id = pokemonUrl.substring(pokemonUrl.lastIndexOf("/") + 1);

  return (
    <CardMedia
      className={classes.cardMedia}
      image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
      title="Image title"
    />
  );
};

export default PokemonCard;
