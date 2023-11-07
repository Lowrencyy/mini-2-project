import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link , useParams} from 'react-router-dom';


function Cuisine() {
  const [ cuisine, setCuisine ] = useState([]);
 let params = useParams();

 
  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)

    const recipes = await data.json();

    setCuisine(recipes.results);
   
  };
              
  useEffect (() => {
    getCuisine(params.type)
    console.log(params)
  },[params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return(
          <div class="flip-card">
            <Link to={'/recipe/' + item.id}>
          <div class="flip-card-inner">
              <div class="flip-card-front">
                  <p class="title">{item.title}</p>
                  <p></p>
              </div>
              <div class="flip-card-back">
                  <img src={item.image} alt={item.id} />
                  <p className='pt-2'>{item.title}</p>
              </div>
          </div>
          </Link>
      </div>
          )
        })}
    </Grid>
  )
}


const Grid = styled.div `
display:grid;
grid-template-columns:repeat(auto-fit , minmax(14rem , 1fr));
grid-gap:3rem;
padding:90px;
`;

const Card = styled.div`
img{
  width:100%;
  border-radius:2rem;
}

a{ 
  text-decoration:none;
}

h4{
  text-align:center;
  padding:1rem;
  font-size:20px;
  font-weight:600;
}


`;

export default Cuisine;
// <Card key={item.id}>
//   
//   <img src={item.image} alt={item.id} />
//   <h4>{item.title}</h4>
//   
// </Card>