import { useEffect, useState } from "react";

function useCallApi(serviceFunction, value = null, number, reverse = false) {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        let { data } = await serviceFunction(value);
        if (reverse) {
          setData(data.reverse());
        } else {
          setData(data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [number]);
  return data;
}

export default useCallApi;
