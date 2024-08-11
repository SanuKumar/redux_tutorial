import React, { useEffect, useState } from "react";
import useComponentVisible from "../../hooks/useComponentVisible";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState("");
  const { ref, isComponentVisible } = useComponentVisible(true);
  const [selectedPost, setSelectedPost] = useState({
    body: "",
    id: "",
    title: "",
    userId: "",
  });
  useEffect(() => {
    fetchPost();
  }, []);

  console.log(ref, isComponentVisible);

  const fetchPost = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => json);

    setPosts(data);
  };

  const handleChange = (e) => {
    setSelectedPost({ ...selectedPost, body: e.target.value });
  };

  const onSelect = (id) => {
    setSelected(id);
    const filterData = posts.filter((post) => post.id === id);
    setSelectedPost(filterData[0]);
  };

  const handleSave = async () => {
    let data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${selected}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF=8",
        },
        body: JSON.stringify(selectedPost),
      }
    )
      .then((res) => res.json())
      .then((json) => json);
    console.log("save", data);
    fetchPost();
    setSelected("");
    setSelectedPost({
      body: "",
      id: "",
      title: "",
      userId: "",
    });
  };

  const handleDelete = async (id) => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => json);
    console.log("delete", data);
    fetchPost();
    setSelected("");
    setSelectedPost({
      body: "",
      id: "",
      title: "",
      userId: "",
    });
  };

  return (
    <>
      <h2>Posts</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "auto",
          width: "80%",
        }}
        ref={ref}
      >
        {posts &&
          posts.map((post) => (
            <div
              style={{
                height: "auto",
                width: "15%",
                border: "1px solid black",
                margin: "2px",
              }}
              key={post.id}
            >
              <div>
                <button onClick={() => handleDelete(post.id)}>X</button>
              </div>
              <div
                onClick={() => onSelect(post.id)}
                style={{ backgroundColor: "grey" }}
              >
                <h3>{post.title}</h3>
                {selected === post.id ? (
                  <>
                    <textarea
                      type='text'
                      value={selectedPost.body}
                      onChange={handleChange}
                      style={{ width: "10rem", height: "150px" }}
                    />
                    <div>
                      <button onClick={handleSave}>Save</button>
                    </div>
                  </>
                ) : (
                  <p>{post.body}</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Post;
