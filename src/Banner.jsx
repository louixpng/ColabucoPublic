import banner from "/src/assets/banner.png";
import menuIcon from "/src/assets/menu-hamburger.png";

function Banner(){
    return(
        <div className="flex justify-center mt-[65px]">
            <div className="opcoes mr-[52px]">
                 <img src={menuIcon} height ="60" width="70" /> 
            </div>
            <div className="galeria">
                <img src={banner} height ="200" width="1200" />
            </div>
        </div>
    );
}

export default Banner;