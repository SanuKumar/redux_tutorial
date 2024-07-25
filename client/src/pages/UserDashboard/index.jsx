import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../actions/userAction";
import Loader from "../../components/Loader";
import "./userDashboardStyle.css";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userList);
  useEffect(() => {
    fetchUser(dispatch);
  }, []);

  const handleViewUser = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <>
      <div>UserDashboard</div>
      <br />
      {error ? (
        <div>{error}</div>
      ) : loading ? (
        <Loader />
      ) : (
        <div className="card-wrapper">
          {users &&
            users.length > 0 &&
            users.map((user) => (
              <div
                className="userCard"
                key={user.id}
                onClick={() => handleViewUser(user.id)}
              >
                <img
                  src={`https://robohash.org/${user.name}`}
                  alt="user"
                  height={50}
                  width={50}
                />
                <div>{user.name}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default UserDashboard;
