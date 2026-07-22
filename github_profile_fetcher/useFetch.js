import {useState, useEffect} from "react";

export default function useFetch() {
  const [profile, setProfile] = useState([]);
  const [count, setCount] = useState("");

  async function getProfile(num) {
    const ran = Math.floor((1 + Math.random()) * 10000);
    const result = await fetch(
      `https://api.github.com/users?since=${ran}&per_page=${num}`,
    );
    const data = await result.json();
    setProfile(data);
  }

  console.log("its times to face  useEffect ")

  useEffect(() => {
    getProfile(10);
  }, []);

  return { count, setCount, profile, getProfile };
}
