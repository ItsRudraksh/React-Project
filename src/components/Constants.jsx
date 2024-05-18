import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export const QuickActionItem = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <FontAwesomeIcon icon={faPenToSquare} color="white" fontSize={60} />
      <p className="text-sm leading-6 text-white font-gotham">{children}</p>
    </div>
  );
};

export const SectionHeader = ({
  letter = "",
  sentence = "",
  color = "white",
  children,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center px-8 w-full">
      <h1
        className={`text-[15.438rem] uppercase text-${color} font-roboto font-bold opacity-15 relative`}
      >
        {letter}
      </h1>
      {sentence && (
        <h1
          className={`text-4xl text-${color} uppercase font-medium font-gotham text-center absolute top-2/4 -translate-y-3/4`}
        >
          {sentence}
        </h1>
      )}
      {children}
    </div>
  );
};

export const FeatureItem = ({ icon, title, description }) => (
  <article className="flex flex-col items-center justify-center text-center text-white gap-4">
    <div className="w-32 h-32 rounded-full bg-[#2e85aa] flex items-center justify-center">
      <FontAwesomeIcon icon={icon} className="text-5xl" />
    </div>
    <h3 className="text-xl uppercase leading-9 font-medium font-gotham">
      {title}
    </h3>
    <p className="text-xs leading-6 font-gotham max-w-xs">{description}</p>
  </article>
);
