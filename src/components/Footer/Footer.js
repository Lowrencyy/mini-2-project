import Logo from '../Resources/logo.png';
import React from 'react';


function Footer() {
  return (
    <div>
      
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://kodego.ph/courses?utm_medium=ppc&utm_source=google&utm_campaign=pmax&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIMzUg76yhLUyah0yLrfjZJqoy1fAxx9oAx_0mttFpYCjBWp-lF9QakaAsqoEALw_wcB" 
            rel='norefferer'
            className="flex items-center mb-4 sm:mb-0">
               <img src={Logo} alt='logo' width={200}/>
               
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a 
                    target='_blank'
                    rel='noreferrer'
                    href="https://www.facebook.com/lowrencyy/" className="mr-4 hover:underline md:mr-6 "><i className="fa-brands fa-facebook fa-beat fa-2xl"></i></a>
                </li>
                <li>
                    <a 
                    target='_blank'
                    rel='noreferrer'
                    href="https//kodego.ph" className="mr-4 hover:underline md:mr-6"><i className="fa-solid fa-file fa-beat-fade fa-2xl"></i></a>
                </li>
                <li>
                    <a 
                    target='_blank'
                    rel='noreferrer'
                    href="https://www.instagram.com/lowrencyy/" className="mr-4 hover:underline md:mr-6 "><i className="fa-brands fa-instagram fa-beat-fade fa-2xl"></i></a>
                  
                    
                </li>
                <li>
                    <a 
                    target='_blank'
                    rel='noreferrer'
                    href="https://www.linkedin.com/in/mark-laurence-tomenio-057a43284/" className="hover:underline"><i className="fa-brands fa-linkedin fa-beat fa-2xl"></i></a>
                    
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a to="https://www.npmjs.com/" target='_blank' rel='noreferrer' className="hover:underline">KODEGO WD86 - TOMENIO</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer;
