import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-center mt-5 mb-5" id="about">
      <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl text-amber-950 mt-16 mb-16">DESCUBRÍ NUESTRO GIN ELABORADO CON LOS MEJORES BOTÁNICOS</h2>
        <div className="flex xl:flex-row flex-col w-[80%] items-center">
          <Image
            className="md:flex w-auto h-auto rounded-xl"
            src={"/images/home.jpg"}
            width={400}
            height={400}
            alt="komorebi"
          />
          <div className="text-lg md:text-3xl p-10 text-amber-950">
            Inspirado en la belleza de los rayos de sol que se filtran a través de
            las hojas de los árboles, nuestro gin artesanal, destilado en
            alambique de cobre, captura la serenidad y la magia de la naturaleza.
            Cada sorbo lleva a sumergirse en un bosque soleado, donde la luz y la
            sombra se entrelazan en armonía.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
