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
