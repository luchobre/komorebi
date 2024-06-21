import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from "next/link";
import "./Whatsapp.css";
import {Tooltip} from "@nextui-org/react";

const Whatsapp = () => {
  return (

          <Tooltip color={'success'} content={'Escribinos!'} className="capitalize">
            <Link variant="flat" color={'success'} className="whatsappButton" href="https://wa.me/5491130141734?text=Hola!+me+interesa+saber+mas+sobre+Komorebi+Gin"
      target="_blank">
              {
              <WhatsAppIcon style={{ color: 'green', height: '50px', width: '50px' }}/>
              }
            </Link>
          </Tooltip>
  );
};

export default Whatsapp;





