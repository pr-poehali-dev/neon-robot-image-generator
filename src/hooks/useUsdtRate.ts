import { useEffect, useState } from "react";
import func2url from "../../backend/func2url.json";

interface UsdtRate {
  bid: number;
  ask: number;
  close: number;
  symbol: string;
}

export const useUsdtRate = () => {
  const [rate, setRate] = useState<UsdtRate | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch(func2url["usdt-rate"]);
        if (!response.ok) throw new Error("rate request failed");
        const data = await response.json();
        setRate(data);
        setError(null);
      } catch (err) {
        setError("Не удалось получить курс");
        console.error(err);
      }
    };

    fetchRate();
    const intervalId = setInterval(fetchRate, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return { rate, error };
};

export default useUsdtRate;
