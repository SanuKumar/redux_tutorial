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
    viewUser(dispatch, id);
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
            <div className="user-card">
              <img src={user.img} alt="user" />
              <div> {user.name}</div>
              <div> {user.email}</div>
              <div> {user.phone}</div>
              <div>{user.username}</div>
              <div>{user.website}</div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default UserPage;
