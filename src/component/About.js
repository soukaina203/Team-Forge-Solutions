import React from 'react';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function About() {
  return (
    <Zoom>
      <div id="about" className="flex flex-col h-full md:mt-[15rem] lg:mt-0  lg:p-[3rem]">
        <div className="flex items-center justify-center w-full">
          {/* First div */}
          <div className="flex-grow max-w-3xl text-[15px] z-40 p-[2.5rem] md:p-[3.7rem] lg:p-[3.8rem] md:border-2 rounded-tl-[206.22px] rounded-br-[206px] md:border-purple-400">
            <h3 className="text-[21px] text-purple-500 md:text-[25px] font-bold">
            À Propos de Nous
            </h3>
            <h2 className="text-xl text-indigo-500 md:text-2xl lg:text-3xl">
              <b>Notre histoire de succès</b>
            </h2>
            <p className="md:text-[19px] lg:text-[22px] w-full max-w-2xl  mb-8 text-gray-600 mt-2">
              <b className="text-xl font-semibold">Depuis</b> sa création en
              2010, TF-SOL – Team Forge Solutions a évolué pour devenir le
              joyau de l'événementiel.
              <br />
              À travers ces années, notre équipe passionnée d'experts s'est
              engagée à donner vie à des événements exceptionnels,
              repoussant constamment les limites de la créativité et de
              l'excellence.
              Chaque année a été marquée par une série d'expériences
              inoubliables, de mariages somptueux à des lancements de produits
              époustouflants, faisant de TF-SOL le choix privilégié pour ceux
              en quête de moments mémorables. Depuis nos débuts en 2010, nous
              avons tracé un chemin jalonné de succès, d'innovation et
              d'engagement envers l'exceptionnel.
            </p>
          </div>
          
          {/* Image Section */}
          <div className=" items-end justify-center w-[34rem] h-[25rem] ml-[-4rem] z-40 hidden lg:block">
            <img src="n.png" alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </Zoom>
  );
}

export default About;
