import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function About() {
  return (
<Zoom>
    <div id='about' className='flex flex-col bg  h-full mt-10  '>
<div className='grid max-w-screen-xl
 px-4 py-8 mx-auto   
 lg:py-16 md:grid-cols-12  justify-between place-items-center
 '> 

{/* first div */}
<div className='  md:col-span-5 
  h-full max-w-sm pb-12 p-2   '>

<h3 class="text-[21px]  text-purple-500 md:text-[25px] font-bold ">
  A Propos de Nous</h3>
  <h2 class="text-xl md:text-2xl lg:text-3xl text-indigo-500  "><b>
    Notre histoire de success</b></h2>

<p className=" md:text-[23px]  w-full max-w-3xl  mb-8 text-gray-600  mx-auto mt-2 text-left ">
<b className=' text-xl font-semibold'> Depuis </b>  sa création en 2010, TF-SOL – Team Forge Solutions a évolué pour devenir le joyau de l'événementiel.
<br />
 À travers ces années, notre équipe passionnée d'experts s'est engagée à donner vie à des événements exceptionnels, 
 repoussant constamment les limites de la créativité et de l'excellence.
 <br />
  Chaque année a été marquée par une série 
 d'expériences inoubliables, de mariages somptueux à des lancements de produits époustouflants, faisant de TF-SOL le 
 choix privilégié pour ceux en quête de moments mémorables.
 <br />
  Depuis nos débuts en 2010, nous avons tracé un chemin 
jalonné de succès, d'innovation et d'engagement envers l'exceptionnel.
</p>
</div>
{/* second Div */}
<div className='col-span-2'>
  <p className='hidden'>any</p>
</div>
<div className='hidden h-full max-w-sm p-5   md:col-span-5 md:flex    '>
<div className='flex flex-col gap-4 justify-center items-end  w-full'>
          <img src="ab1.jpg" alt="" className='shadow-xl w-[9rem] h-[11rem] lg:w-full lg:h-full rounded-lg' />
          <img src="ab3.jpg" alt="" className='shadow-xl w-[9rem] h-[9rem] lg:w-full lg:h-full rounded-lg' />

        </div>
</div>
      </div>
    </div>
    </Zoom>
  )
}

export default About
