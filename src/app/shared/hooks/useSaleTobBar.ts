import { useEffect, useState, useMemo } from "react";
import { handleSaleTimer } from "@/app/constants/sharedFunctions/saleTimer";

const { calculateTimeLeft } = handleSaleTimer();
export const useSaleTobBar = () => {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 6);
    return date;
  }, []);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
