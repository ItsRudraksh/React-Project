import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
const Hero = () => {
  return (
    <div className="w-full h-max flex flex-col relative items-center justify-center">
      <img
        src="/src/assets/Images/sec1-bg.png"
        alt=""
        className="w-full h-full object-cover relative"
      />
      <div className="absolute w-full h-full flex items-end justify-center">
        <div className="h-3/5 flex flex-col items-center justify-between mb-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-gotham uppercase tracking-hero-spacing text-[9.563rem] font-bold text-[#f5f5f5]">
              creatives
            </h1>
            <p className="text-2xl tracking-[1.188rem] leading-[3.188rem] uppercase text-[#11749e] font-medium text-center font-gotham">
              powered by chitkara university
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-[0.813rem] leading-5 text-white font-normal font-open-sans">
              Scroll Down
            </p>
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-[#f5f5f5] text-xl tracking-[-0.063rem] uppercase transition-all ease-in-out hover:bg-white cursor-pointer hover:text-black">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
