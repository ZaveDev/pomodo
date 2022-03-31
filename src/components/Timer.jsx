import { useEffect } from "react";
import { useScope } from "../Scope";

export default function Timer() {
  const { time, type } = useScope().get;
  const { setTime } = useScope().set;

  // useEffect(() => {
  //   console.log(`Copy that ${type} `);
  //   onTypeChange();
  // }, [type]);

  return (
    <div>
      {time
        ? Math.floor(time / 60)
            .toString()
            .padStart(2, "0")
        : 0}
      :{time ? (time % 60).toString().padStart(2, "0") : 0}
    </div>
  );
}
