import { useState } from "react";
import LightOff from "../../public/images/light-off.svg";
import LightBlue from "../../public/images/light-blue.svg";

export const SingleLight = () => {
  const [isOn, setOn] = useState(true);
  const handleToogle = () => {
    setOn(!isOn);
  };

  const imageSrc = isOn ? LightBlue : LightOff;
  return <img onClick={handleToogle} src={imageSrc} alt="img" />;
};
