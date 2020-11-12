import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../config";

const CONTEXT_KEY = "77332d7eba385de01";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const searchFetchData = async () => {
      const { data } = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      );
      setData(data);
    };

    searchFetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
