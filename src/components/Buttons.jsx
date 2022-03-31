import { useScope } from "../Scope";

export default function Buttons({ label, inputType }) {
  const { setType, setTime, setStop } = useScope().set;
  const changeType = () => {
    setType(inputType);
    console.log(`Type changed to: ${inputType}`);

    switch (inputType) {
      case "pomo":
        setTime((time) => 25 * 60);
        setStop(false);
        break;

      case "qBreak":
        setTime((time) => 5 * 60);
        setStop(false);
        break;

      case "lBreak":
        setTime((time) => 30 * 60);
        setStop(false);
        break;

      default:
        break;
    }
  };
  return <div onClick={changeType}>{label}</div>;
}
