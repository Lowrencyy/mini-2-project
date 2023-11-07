import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  
import styled from 'styled-components';   
import { Link } from 'react-router-dom';                   

function Searched() {

    const [searchedRecipe , setSearchedRecipe] = useState([]);
    let params = useParams();

    useEffect(() => {
        const getSearch = async (name) => {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        
            const recipes = await data.json();
        
            setSearchedRecipe(recipes.results);
           
          };

        getSearch(params.search);
      },[params.search]);

  return (
   <div>
  
    <Grid>
        {searchedRecipe.map((item) => {
            return (
                <Card key={item.id} >
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>


   </div>
  )
}

const Grid = styled.div `
display:grid;
grid-template-columns:repeat(auto-fit , minmax(20rem , 1fr));
grid-gap:3rem;
padding:90px;
`;

const Card = styled.div`
img {
    width:100%;
    border-radius:2rem;
}

a{
    text-decoration:none;

}

h4{
text-align:center;
padding:1rem;
}

`

export default Searched;