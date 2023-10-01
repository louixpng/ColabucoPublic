import React from "react";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
 
function NavList() {
  return (
    <ul className="py-[24px] flex lg:flex-row">
      <Typography
        as="li"
        color="blue-gray"
        className="font-montserrat_alt_semibold"
      >
        <a href="#" className="flex text-[18px] items-center hover:text-blue-500 transition-colors">
          ARTES VISUAIS
        </a>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="font-montserrat_alt_semibold"
      >
        <a href="#" className="pl-[48px] flex text-[18px] items-center hover:text-blue-500 transition-colors">
          MÚSICA
        </a>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="font-montserrat_alt_semibold"
      >
        <a href="#" className="pl-[48px] flex text-[18px] items-center hover:text-blue-500 transition-colors">
          LITERATURA
        </a>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="font-montserrat_alt_semibold"
      >
        <a href="#" className="pl-[48px] flex text-[18px] items-center hover:text-blue-500 transition-colors">
          CINEMA
        </a>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="pl-[48px] font-montserrat_alt_semibold"
      >
        <a href="#" className="flex text-[18px] items-center hover:text-blue-500 transition-colors">
          ARTESANATO
        </a>
      </Typography>
    </ul>
  );
}
 
export default function NavbarFiltros() {
  return (
    <Navbar className="bg-yellow h-[72px] ">
      <div className="pl-[582px] flex items-center justify-between text-blue-gray-900">
        <div>
          <NavList />
        </div>
     </div>
    </Navbar>
  );
}