import { useEffect, useState } from "react";
import { CONSTANTS } from "../constants/constants";
import { Button } from "./Button";
import { Counts } from "./Counts";
const { MOZARELLA, CHEDDAR, PARMESAN, CHARDONAY, MERLOT, CABERNET } = CONSTANTS;
export const ParentComponent = () => {
  const [cheeseType, setCheeseType] = useState("");
  const [wine, setWine] = useState("");

  const whichWineGoesBest = () => {
    switch (cheeseType) {
      case MOZARELLA:
        return setWine(CABERNET);
      case CHEDDAR:
        return setWine(CHARDONAY);
      case PARMESAN:
        return setWine(MERLOT);
      default:
        return CHARDONAY;
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      whichWineGoesBest();
    }
    if (mounted) {
      whichWineGoesBest();
    }
  }, [cheeseType]);

  return (
    <div className="flex flex-col justify-center items-center">
        <h3 className="text-center dark:text-gray-400 mt-10">
          Without React.memo() or useMemo()
        </h3>
      <h1 className="font-semibold text-2xl dark:text-white max-w-md text-center">
        Select a cheese and we will tell you which wine goes best!
      </h1>
      <div className="flex flex-col gap-4 mt-10">
        <Button text={MOZARELLA} onClick={() => setCheeseType(MOZARELLA)} />
        <Button text={CHEDDAR} onClick={() => setCheeseType(CHEDDAR)} />
        <Button text={PARMESAN} onClick={() => setCheeseType(PARMESAN)} />
      </div>
      {cheeseType && (
        <p className="mt-5 dark:text-green-400 font-semibold">
          For {cheeseType}, <span className="dark:text-yellow-500">{wine}</span>{" "}
          goes best.
        </p>
      )}
      <Counts />
    </div>
  );
};

