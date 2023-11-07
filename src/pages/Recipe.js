


import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";


import React from 'react'

function Recipe() {

 let params = useParams();

 const [details , setDetails] = useState({});

 const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
 );
 const detailData = await data.json();
 setDetails(detailData);
};

useEffect(() => {
    fetchDetails();

},[params.name]);

  return (
<div>
    <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
             <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{details.title}</h1>
            <p className="max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 pt-5">SCROLL DOWN TO GET THE RECIPE AND PROCEDURE!!</p>
          
          
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className="br-25" src={details.image} alt='hello world' />
             </div>                
        </div>

        <section>
            
            
        </section>
       

      
    </section>

    <section>
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
     
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <i className="fa-solid fa-utensils"></i>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">PROCEDURE & CALORIES</h3>
              <p className="text-gray-500 dark:text-gray-400"><p dangerouslySetInnerHTML={{__html:details.summary}}>
                
                </p>
                </p>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <i className="fa-solid fa-kitchen-set"></i>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">INSTRUCTION</h3>
              <div className="text-gray-500 dark:text-gray-400">
                <div dangerouslySetInnerHTML={{__html:details.instructions}}></div>
              </div>
          </div>
          <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <i className="fa-solid fa-bowl-food"></i>           
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">INGREDIENTS</h3>

                <ul>
                    {details.extendedIngredients?.map((ingredients) => (
                        <li key={ingredients.id}><p>{ingredients.original}</p></li>
                    ))}
                </ul>
          </div>
        
          
      </div>
  </div>
        </section>
    </section>
</div>
      )
    }
    

export default Recipe;

