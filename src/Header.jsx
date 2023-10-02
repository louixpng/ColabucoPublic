import { Navbar, Input } from "@material-tailwind/react";

import Logo from "/src/assets/LogoColabuco.svg";

import UserIcon from "/src/assets/user 2.png";

import BagIcon from "/src/assets/bag 2.png";

export default function NavbarComBusca() {
  return (
    <Navbar className="border-[3px] border-black flex m-0">
      <div className="pl-[333px] px-[15px] flex">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-82.98 w-193" src={Logo} />
        </div>

        <div className="pl-[103px] pb-[34px] pt-[34px] relative flex w-full gap-2 md:w-max">
          <Input
            placeholder="O que você procura?"
            type="search"
            className="font-montserrat_alt_semibold text-[20px] placeholder-primary border-[3px] pl-[26px] rounded-[8px] border-black min-w-[658px] min-h-[49px]"
          />

          <div className="pl-[132px] flex gap-1 pr-[322px]">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-[51px] w-[51px]" src={UserIcon} />
            </div>
            <div className=" pl-[32px] flex flex-shrink-0 items-center">
              <img className="h-[60px] w-[60px]" src={BagIcon} />
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
