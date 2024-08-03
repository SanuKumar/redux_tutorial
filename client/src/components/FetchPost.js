import React from "react";
import useAxios from "../hooks/useAxios";

const FetchPost = () => {
  const { response, error, loading, fetchData } = useAxios();

  const handleFetch = () => {
    fetchData({
      url: "/posts",
      method: "GET",
    });
  };

  return (
    <div>
      <h3>FetchPost</h3>
      <div>
        <button onClick={handleFetch}>Fetch Post</button>
      </div>
      <div>
        {error ? (
          <div>Error...</div>
        ) : loading ? (
          <div>Loading...</div>
        ) : (
          response && (
            <pre style={{ textAlign: "left" }}>
              {JSON.stringify(response, null, 2)}
            </pre>
          )
        )}
      </div>
    </div>
  );
};

export default FetchPost;
