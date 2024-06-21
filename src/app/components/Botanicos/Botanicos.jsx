"use client";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

const Botanicos = () => {
  const botanicos = [
    {
      name: "Enebro",
      image: "/images/botanico1.jpg",
      description: "El enebro es el botánico más importante en la producción de gin. Sus bayas aportan el característico sabor a pino y resina, que es esencial para cualquier gin clásico. Además, ofrece notas cítricas y herbales que complementan otros ingredientes botánicos.",
    },
    {
      name: "Coriandro",
      image: "/images/botanico2.jpg",
      description: "Las semillas de coriandro aportan un perfil cítrico y especiado al gin, con matices de limón y naranja. También añade un toque de dulzura y calidez que equilibra las notas más fuertes del enebro.",
    },
    {
      name: "Cardamomo",
      image: "/images/botanico3.jpg",
      description: "El cardamomo es un botánico que añade un aroma complejo y especiado al gin, con notas de eucalipto, mentol y limón. Su sabor es intenso y exótico, aportando profundidad y riqueza a la mezcla.",
    },
    {
      name: "Lemon grass",
      image: "/images/botanico4.jpg",
      description: "El lemon grass aporta un fresco y vibrante sabor cítrico al gin. Sus notas de limón y lima son ligeras y herbales, proporcionando una frescura que complementa bien con otros cítricos y especias.",
    },
    {
      name: "Rosa mosqueta",
      image: "/images/botanico5.jpg",
      description: "La rosa mosqueta añade un toque floral y afrutado al gin. Sus notas dulces y ligeramente ácidas aportan una dimensión frutal que equilibra los elementos más herbales y especiados del gin.",
    },
    {
      name: "Pétalos de rosa",
      image: "/images/botanico6.jpg",
      description: "Los pétalos de rosa añaden un delicado aroma floral al gin. Su fragancia suave y romántica complementa los otros botánicos, aportando una nota elegante y perfumada a la mezcla.",
    },
    {
      name: "Pimienta rosa",
      image: "/images/botanico7.jpg",
      description: "La pimienta rosa aporta un toque especiado y ligeramente dulce al gin. Su sabor es más suave y afrutado que otras pimientas, ofreciendo una calidez sutil que realza las notas cítricas y florales.",
    },
    {
      name: "Cáscara de pomelo",
      image: "/images/botanico8.jpg",
      description: "La cáscara de pomelo añade un sabor cítrico brillante y refrescante al gin. Sus notas amargas y dulces equilibran perfectamente los sabores más robustos del enebro y las especias.",
    },
    {
      name: "Raíz de angélica",
      image: "/images/botanico9.jpg",
      description: "La raíz de angélica aporta un sabor terroso y herbal al gin. Sus notas de almizcle y tierra ayudan a fijar y equilibrar los otros aromas, proporcionando una base sólida y compleja a la mezcla final.",
    },
  ];
  
  return (
    <>
      <div className="p-10" id="botanicos">
        <div className="grid md:grid-cols-3 md:grid-rows-3 grid-cols-2 grid-rows-5 items-center">
          {botanicos.map((item, index) => (
            <div className="flex flex-col items-center cursor-pointer" key={index}>
              <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger>
                  <Image
                    className="flex justify-center w-auto h-auto"
                    key={index}
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">{item.name}</div>
                    <div className="text-tiny w-48">{item.description}</div>
                  </div>
                </PopoverContent>
              </Popover>

              <span className="text-xl text-amber-950">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Botanicos;
