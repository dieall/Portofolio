import React from "react";
import saranjana from "../../src/assets/saranjana.png";
import Typewriter from "typewriter-effect";
import poliklinik from "../../src/assets/projects/poliklinik.png"
import { GrBitcoin } from 'react-icons/gr';
import lelang from "../../src/assets/projects/lelang.png"
import toko from "../assets/projects/toko.png"


const Work = ({theme}) => {
  return (
    <div name="Work" className={theme? "min-h-screen bg-[#ffffff] text-black p-5" : "min-h-screen bg-[#0a192f] p-5"}>
         {/*Work container */}
      <div className="text-[#ccd6f6] pl-4 ">
             
         {/* Text container */}
            <div className="text-center">
            <h1 className={theme? "font-bold text-4xl text-black border-b-4 inline-block border-pink-600" : "font-bold text-4xl border-b-4 inline-block border-pink-600"}>WORK</h1>
            <p className=" mx-auto mt-3 text-xl max-w-[600px] font-mono text-green-500">
                 <Typewriter 
                  options={{
                 strings: ["Check Out Some of My Recent Work" ],
                 autoStart: true,
                loop: true,
                 }}
                />
             </p>
          
            </div>




           {/*---------------------------------- Grid Container ---------------------------------------------------*/}

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center pl-7">


        {/* 1card  */}
   <div className= {theme? "m-3 p-2 flex flex-col text-black items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100 hover:text-white  hover:bg-slate-800 duration-150 cursor-pointer "
   : "m-3 p-2 flex flex-col  items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100  hover:bg-slate-800 duration-150 cursor-pointer "} >  
               <img src={saranjana} alt="" className="h-120"></img>

               <p className="m-2 p-2 font-bold flex items-center gap-2">City Saranjana</p>
               
               <p className="p-2 font-bold text-center">Dev C++ ,CSS , Code Block</p>
               
             
                      
                      {/* buttons */}
                <div className="flex items-center justify-center mt-2 ">


                 <a href="https://github.com/shoaibabdulkhadeer/Crypto-react-FrontEnd">                        
                  <button type="button" class="text-white bg-gradient-to-r mt-2
                  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg
                   shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >VIEW CODE</button> 
                    </a> 

                  <a href="/">
                    <button disabled type="button" class=" cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                      <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                       </svg>

                     <a href=" https://cryptozen1.netlify.app//"> WATCH LIVE... </a>  
                  </button>
                  </a>
                </div>
            
             </div>





   {/* 2card  */}
   <div className= {theme? "m-3 p-2 flex flex-col text-black items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100 hover:text-white  hover:bg-slate-800 duration-150 cursor-pointer "
   : "m-3 p-2 flex flex-col  items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100  hover:bg-slate-800 duration-150 cursor-pointer "}>  
               <img src={lelang} alt="" className="h-120"></img>
                      
               <p className="m-2 p-2 font-bold flex items-center gap-2"> Aplikasi Lelang </p>
               
               <p className="p-2 font-bold text-center">PHP , CSS , HTML, BOOSTRAP, JS</p>
               

                      {/* buttons */}
                <div className="flex items-center justify-center mt-2 ">


                 <a href="https://github.com/shoaibabdulkhadeer/netlixlap.git">                        
                  <button type="button" class="text-white bg-gradient-to-r mt-2
                  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg
                   shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >VIEW CODE</button> 
                    </a> 

                  <a href="https://www.google.com/">
                    <button disabled type="button" class=" cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                      <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                       </svg>

                     <a href="https://github.com/shoaibabdulkhadeer/netlixlap.git" > WATCH LIVE... </a>  
                  </button>
                  </a>
                </div>
            
             </div>



             {/* 3card  */}
   <div className= {theme? "m-3 p-2 flex flex-col text-black items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100 hover:text-white  hover:bg-slate-800 duration-150 cursor-pointer "
   : "m-3 p-2 flex flex-col  items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100  hover:bg-slate-800 duration-150 cursor-pointer "}>  
               <img src={poliklinik} alt="" className="h-120"></img>
               <p className="m-2 p-2 font-bold">Aplikasi Poliklinik</p>
               
               <p className="p-2 font-bold text-center">PHP , CSS , HTML, BOOSTRAP, JS</p>
                      
                      {/* buttons */}
                <div className="flex items-center justify-center mt-2 ">


                 <a href="https://github.com/shoaibabdulkhadeer/poliklinik-app">                        
                  <button type="button" class="text-white bg-gradient-to-r mt-2
                  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg
                   shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >VIEW CODE</button> 
                    </a> 

                  <a href="https://www.google.com/">
                    <button disabled type="button" class=" cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                      <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                       </svg>

                     <a href="https://shoaibakpoliklinikapp.netlify.app/"> WATCH LIVE... </a>  
                  </button>
                  </a>
                </div>
            
             </div>




   {/* 4card  */}
   <div className= {theme? "m-3 p-2 flex flex-col text-black items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100 hover:text-white  hover:bg-slate-800 duration-150 cursor-pointer "
   : "m-3 p-2 flex flex-col  items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100  hover:bg-slate-800 duration-150 cursor-pointer "}>  
               <img src={toko} alt="" className="h-120"></img>
                     <p className="m-2 p-2 font-bold flex items-center gap-2"> Aplikasi Toko Sejahtera </p>
               
               <p className="p-2 font-bold text-center">Laravel , Bootstrap , CSS , HTML , JS </p>
                      
                      {/* buttons */}
                <div className="flex items-center justify-center mt-2 ">


                 <a href="https://github.com/shoaibabdulkhadeer/react-twitterclone.git">                        
                  <button type="button" class="text-white bg-gradient-to-r mt-2
                  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg
                   shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >VIEW CODE</button> 
                    </a> 

                  <a href="https://www.google.com/">
                    <button disabled type="button" class=" cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                      <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                       </svg>

                     <a href="https://github.com/shoaibabdulkhadeer/react-twitterclone.git"> WATCH LIVE... </a>  
                  </button>
                  </a>
                </div>
            
             </div>


   



      {/* 5card  */}
      <div className= {theme? "m-3 p-2 flex flex-col text-black items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100 hover:text-white  hover:bg-slate-800 duration-150 cursor-pointer "
   : "m-3 p-2 flex flex-col  items-center justify-center shadow-md shadow-[#040c16] scale-95 hover:scale-100  hover:bg-slate-800 duration-150 cursor-pointer "}>  
               <img src='/images/lib.png' alt="" className="h-120"></img>

               <p className="m-2 p-2 font-bold flex items-center gap-2"> <GrBitcoin size={25}/> Library Management System <GrBitcoin size={25} /> </p>
               
               <p className="p-2 font-bold text-center">React js , Custom Css</p>
                      
                      {/* buttons */}
                <div className="flex items-center justify-center mt-2 ">


                 <a href="https://github.com/shoaibabdulkhadeer/ReactJs-Library-management-system">                        
                  <button type="button" class="text-white bg-gradient-to-r mt-2
                  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg
                   shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >VIEW CODE</button> 
                    </a> 

                  <a href="https://shoaiblmsproject.netlify.app/">
                    <button disabled type="button" class=" cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                      <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                       </svg>

                     <a href="/"> WATCH LIVE... </a>  
                  </button>
                  </a>
                </div>
            
             </div>

        
               
           

          
           



   {/* 6card  */}
   




           </div>

     </div>

    </div>
  );
};

export default Work;
