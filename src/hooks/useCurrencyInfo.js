import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch();
  }, [currency]);
}
export default useCurrencyInfo;
