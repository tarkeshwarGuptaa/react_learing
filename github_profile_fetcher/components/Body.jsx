import { useEffect, useState } from "react";
import useFetch from "../useFetch";

function Body() {
  const { count, setCount, profile, getProfile } = useFetch();
  return (
    <div id="main">
      <input
        type="number"
        placeholder="How many ...?"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => getProfile(count)}>Search</button>
      <div id="card-container">
        {profile.map((indVal) => {
          return (
            <div key={indVal.id} className="cards">
              <img src={indVal.avatar_url} alt="img" />
              <div className="card-body">
                <h2>{indVal.login}</h2>
                <a target="_blank" href={indVal.html_url}>
                  Profile
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
