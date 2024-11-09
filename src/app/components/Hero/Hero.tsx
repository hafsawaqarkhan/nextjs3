import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div>
      <h1 className = 'underline font-bold text-center '>ABOUT BOOKS</h1>
      <p className = 'text-center  text-cyan-700 italic font-medium'>
      "Books are good company, in sad times and happy times,for books are people <br>
      </br> - people who have managed to stay alive by hiding 
      between the covers of a book." ― E.B. White
    </p> <br>
    </br>
    <p className = 'text-center  text-cyan-500 italic font-medium'>
    “I have always thought that a good book should be either the entry point inward,<br>
    </br> to learn about yourself, or a door outward, to open
     you up to new worlds.” ― Taylor Jenkins Reid
    </p>
    <div>
<Image  className =" m-8 p-9 text-center "src ={ "/image/library.png"} alt = "library" width = {700} height={400}/>
<h1 className = 'underline font-bold text-center text-4xl '>MY FAVOURITES</h1>

<br></br>
      <h1 className='font-semibold itailic text-3xl text-center underline text-fuchsia-600'> 1- IT ENDS WITH US</h1>
      <Image className='m-4 p-6' src = {"/image/book01.jpg"} alt = "book" width={300} height={500} />
      
        <a className = " m-4 py-4 uppercase font-normal underline "href = "https://en.wikipedia.org/wiki/It_Ends_with_Us"> Click Here to read about it</a>
        
        <h1 className='font-semibold itailic text-3xl text-center text-fuchsia-600 underline'> 2- BETTER THAN MOVIES</h1>
      <Image className='m-4 p-6' src = {"/image/book02.jpg"} alt = "book" width={300} height={500} />
      
        <a className = " m-4  uppercase font-normal underline "href = "https://www.supersummary.com/better-than-the-movies/summary/"> Click Here to read about it</a>
        
    </div>
      
</div>

)
}
export default Hero