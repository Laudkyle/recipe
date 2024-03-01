import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Cuisine() {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return <div></div>;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(autofit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export default Cuisine;
