//Icons
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const PseintLogo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-3xl">
      <BiDownArrowAlt className="text-secondary -rotate-3 text-6xl -mb-3" />
      <span className="relative border-2 border-neutral inline-block w-40 -skew-x-[25deg] transform bg-base-300 px-4 py-2 text-center font-bold -mb-3 md:w-72 md:py-4 md:text-4xl">
        PSe
        <BiUpArrowAlt className="text-primary -rotate-[135deg] text-6xl absolute -top-[30px] -right-[30px]"  />
      </span>
      <BiDownArrowAlt className="text-secondary -rotate-3 text-6xl -mb-3" />
      <span className="relative border-2 border-neutral inline-block w-40 -skew-x-[25deg] transform bg-base-300 px-4 py-2 text-center font-bold md:w-72 md:py-4 md:text-4xl">
        Int
        <BiUpArrowAlt className="text-primary rotate-45 text-6xl absolute -top-[35px] -right-[30px]" />
      </span>
      <BiUpArrowAlt className="text-secondary text-6xl -mt-8" />
    </div>
  );
};

export default PseintLogo;
