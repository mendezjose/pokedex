import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadPokemons } from "./store/pokemons";
import PokemonsGrid from "./components/pokemonsGrid";
import SearchBar from "./components/searchBar";
import PokemonModal from "./components/pokemonModal";

function App(props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    props.loadPokemons();
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handlePokemonSelected = (pokemon) => {
    setSelectedPokemon(pokemon);
    setOpenModal(true);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SearchBar onChange={handleChangeQuery} />
      <PokemonsGrid
        allPokemons={props.pokemons}
        query={query}
        onPokemonSelected={handlePokemonSelected}
        onPageChanged={handlePageChange}
        page={page}
      />
      {selectedPokemon && (
        <PokemonModal
          open={openModal}
          pokemon={selectedPokemon}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state,
});

const mapDispatchToProps = (dispatch) => ({
  loadPokemons: () => dispatch(loadPokemons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
