// Fetch an image from the API and display it

import { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line no-unused-vars
const fetchImage = async () => {
  const res = await fetch("https://nekos.best/api/v2/happy");
  const data = await res.json();
  return data.results[0].url;
};

export const Fetch = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => { // 여기 ()에 async 못박아서 안에 async 박고 실행 
    const apiCall = async () => {
      const url = await fetchImage(); // async 종료 전 컴포넌트 unmount? -> 오류가 발생.
      setImageUrl(url);
    }
    apiCall();
  }, [])

  return (
    <>
      <img src={imageUrl} alt="Happy anime character" />
    </>
  );
};
