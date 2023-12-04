import { useEffect, useState } from "react";
import { zeroPad } from "../utils/string";

const useCountdown = (targetDate: number | string | Date) => {
  const countDownEndTime = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownEndTime - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let diff = countDownEndTime - new Date().getTime();
      if (diff) {
        setCountDown(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownEndTime]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  // so we count seconds more accurately and there are no gaps
  const seconds = Math.round((countDown % (1000 * 60)) / 1000);

  return {
    days: zeroPad(days, 2),
    hours: zeroPad(hours, 2),
    minutes: zeroPad(minutes, 2),
    seconds: zeroPad(seconds, 2),
  };
};

export { useCountdown };
