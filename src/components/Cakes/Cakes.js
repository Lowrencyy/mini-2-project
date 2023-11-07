import { useEffect , useState} from "react";
// import styled from "styled-components";
import { Splide , SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
// import App from "../../App.css";



// const apiKey = '974fbe5df41640ca82e759fade2e0b46'

function Cakes() {
 
    const [cakes , setCakes ] = useState([]);

    
    useEffect (() => {
        getVeggies();
    },[]);
    const getVeggies = async () => {

        const check = localStorage.getItem('cakesss');

        if(check) {
            setCakes(JSON.parse(check));
        } 
        else {  
        const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=cakes`);  
        const data = await api.json();
        localStorage.setItem('cakesss' , JSON.stringify(data.recipes));
        setCakes(data.recipes);
        console.log(data.recipes);
        }       
    };

  return (
    <div>
   
    
            <div className="Wrapper-veggies">
                <h2 className="text-center-hero">Cake's and Sweet</h2>
                <Splide options={{
                    perPage:5,
                    arrows:false,
                    pagination:false,
                    gap:'1rem',
                    drag:'free',


                }}>

                {cakes.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <div className="Card-veggies">
                            <Link to={'/recipe/'+recipe.id}>
                            <p className="veggiesP">{recipe.title}</p>
                            <img className="veggiesImg" src={recipe.image} alt={recipe.title} />
                            <div className="Gradient-veggies"/>
                            </Link>
                        </div>
                        </SplideSlide>
                    );
                })}
                </Splide>
            </div>
     
    
       
    </div>
  )
}

export default Cakes;