import React from 'react';
import Zoom from 'react-reveal/Zoom'; 

function TeamBuilding() {
  return (
    <Zoom>
      <div id='team' className='flex flex-col justify-center lg:mb-12 h-full mt-6 lg:mt-[4rem] bg-gradient-to-r'>
        <div className='flex flex-col items-center justify-center max-w-screen-lg mx-auto'>
          <h1 className='text-[24px] p-4 pb-0 md:p-0 md:text-4xl font-semibold'>Recherche, analyse : action !</h1>
          <p className='md:text-[22px]  text-left md:text-center p-[2.5rem] md:p-4 lg:pl-0 w-full text-gray-500'>
            <b className='text-xl text-black'>TF-SOL</b>, est une agence à taille humaine qui saura développer au sein de vos équipes, ce mélange entre cohésion, motivation, coaching et corporate. Nous nous adapterons aux besoins et à la stratégie de votre entreprise dans l’organisation de votre séminaire team building. De l’efficacité, de la qualité et du professionnalisme dans une agence qui personnalisera votre projet. Nous allons réfléchir ensemble au scénario d’animation pour organiser l’ambiance et l’architecture de votre événement. Vous avez des idées fortes, des mots clés, des exigences managériales. Nous savons les faire passer via nos animations séminaire team building et nos coachs, qui encadreront votre événement avec pertinence, tact et conviction. Du divertissement, au team building, du coaching au management, nous saurons adapter votre événement à votre image.
          </p>
        </div>
      </div>
    </Zoom>
  );
}

export default TeamBuilding;
