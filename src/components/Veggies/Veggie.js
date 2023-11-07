import { useEffect , useState} from "react";
// import styled from "styled-components";
import { Splide , SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
// import App from "../../App.css";



// const apiKey = '974fbe5df41640ca82e759fade2e0b46'

function Veggie() {
 
    const [veggies , setVeggies ] = useState([]);

    
    useEffect (() => {
        getVeggies();
    },[]);
    const getVeggies = async () => {

        const check = localStorage.getItem('vegetarian');

        if(check) {
            setVeggies(JSON.parse(check));
        } 
        else {  
        const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`);  
        const data = await api.json();
        localStorage.setItem('vegetarian' , JSON.stringify(data.recipes));
        setVeggies(data.recipes);
        console.log(data.recipes);
        }       
    };

  return (
    <div>
   
    
            <div className="Wrapper-veggies">
                <h2 className="text-center-hero">Vegetarian Section</h2>
                <Splide options={{
                    perPage:3,
                    arrows:false,
                    pagination:false,
                    gap:'2rem',
                    drag:'free',


                }}>

                {veggies.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <div className="Card-veggies">
                            <Link to={'/recipe/' + recipe.id}>
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

export default Veggie;