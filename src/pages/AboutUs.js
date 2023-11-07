import React from 'react'

function AboutUs() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">KODELINARY DISHES</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">ENJOY GETTING FREE RECIPE</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
           <div>
            
           </div>
         
        </div>
        <div>
          <div>MORE DETAILS ABOUT KODELINARY</div>
        <div className="iframe-container">
            <iframe width="960" height="515" src="https://www.youtube.com/embed/827QFRWNgFw?si=I2ucMXhrxnCLNzkH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
    
    </div>
</section>
    </div>
  )
}

export default AboutUs;