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

  return <Grid>
    {cuisine.map((item) =>{
        return(
            <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            </Card>
        );
    })}
  </Grid>;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(autofit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;
const Card = styled.div`
    img{
        border-radius:2rem;
        width:100%;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Cuisine;
