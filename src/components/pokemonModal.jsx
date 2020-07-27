import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Box } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";

const PokemonModal = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    if (!props.pokemon) return;
    async function setPokemonData() {
      try {
        const { data } = await axios(`${props.pokemon.url}`);
        setPokemon(data);
      } catch (error) {
        return;
      }
    }
    setPokemonData();
    return () => setPokemon(null);
  }, [props.pokemon]);

  if (!pokemon) return <></>;

  const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <CloseIcon className={classes.closeIcon} onClick={props.handleClose} />
        <h2 id="simple-modal-title">{pokemon.name}</h2>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={5}>
            <CardMedia
              className={classes.cardMedia}
              image={imgURL}
              title="Image title"
            />
          </Grid>
          <Grid container item xs={12} sm={7}>
            <Grid item xs={4}>
              <Box mb={1}>Altura:</Box>
              <Box mb={3}>{pokemon.height}</Box>
            </Grid>
            <Grid item xs={8}>
              <Box mb={1}>Peso:</Box>
              <Box mb={3}>{pokemon.weight}</Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={1}>Tipo:</Box>
              <Box mb={3}>
                <Grid container spacing={1}>
                  {pokemon.types.map((type) => (
                    <Grid item>
                      <Button
                        key={type.type.name}
                        size="small"
                        variant="contained"
                      >
                        {type.type.name}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={1}>Habilidades:</Box>
              <Box mb={3}>
                <Grid container spacing={1}>
                  {pokemon.abilities.map((ability) => (
                    <Grid item>
                      <Button
                        key={ability.ability.name}
                        size="small"
                        variant="contained"
                      >
                        {ability.ability.name}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default PokemonModal;
