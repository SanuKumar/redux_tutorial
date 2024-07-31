import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { viewUser } from "../../actions/userAction";
import "./userPageStyle.css";
import Loader from "../../components/Loader";

const UserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.viewUser);

  useEffect(() => {
    dispatch(viewUser(id));
  }, []);
  return (
    <>
      <h2>User Details</h2>
      <br />
      {error ? (
        <div>{error}</div>
      ) : loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        user && (
          <>
            <div className='user-card'>
              <div>
                <img src={user.img} alt='user' />
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Name:</span> {user.name}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Email:</span> {user.email}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Phone:</span> {user.phone}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Username:</span>{" "}
                {user.username}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Website:</span>{" "}
                {user.website}
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default UserPage;
