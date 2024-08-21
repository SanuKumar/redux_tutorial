import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../../components/Loader";

const Product = () => {
  const [userList, setUserList] = useState([]);
  const [userFilter, setUserFilter] = useState([]);
  const [loader, setLoader] = useState(false);
  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    userName: "",
    phone: "",
    website: "",
    address: "",
    company: "",
  });
  const [selected, setSelected] = useState("");

  const fetchUsers = async () => {
    setLoader(true);
    try {
      setTimeout(async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setLoader(false);
        setUserList(res.data);
        setUserFilter(res.data);
      }, 3000);
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (searchTxt) => {
    const filterUser = userFilter.filter((user) =>
      user.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setUserList(filterUser);
  };

  const handleDelete = (id) => {
    const removedUser = userList.filter((user) => user.id != id);
    setUserList(removedUser);
  };

  const handleEdit = (id) => {
    setSelected(id);
    const selectedUser = userList.find((user) => user.id == id);
    setFieldData(selectedUser);
  };

  const handleChange = (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const objIndex = userList.findIndex((user) => user.id == selected);
    userList[objIndex] = fieldData;
    setSelected("");
  };

  const headerList = [
    { name: "ID" },
    { name: "Name" },
    { name: "Email" },
    { name: "UserName" },
    { name: "Phone" },
    { name: "Webisite" },
    { name: "Address" },
    { name: "Company" },
  ];

  return (
    <>
      <div>User List</div>
      <div>
        <label>Search User</label>
        <input type='text' onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <br />
      <table>
        <thead>
          <tr>
            {headerList &&
              headerList.map((h) => <th key={h.name}>{h.name}</th>)}
          </tr>
        </thead>
        {loader ? (
          <Loader />
        ) : (
          <>
            {!userList.length && "No User Found"}
            {userList &&
              userList.map((user) => (
                <tbody key={user.name}>
                  <tr>
                    <td>{user.id}</td>
                    <td>
                      {selected != user.id ? (
                        <div>{user.name}</div>
                      ) : (
                        <input
                          name='name'
                          value={fieldData.name}
                          onChange={handleChange}
                        />
                      )}
                    </td>
                    <td>
                      {selected != user.id ? (
                        <div>{user.email}</div>
                      ) : (
                        <input
                          value={fieldData.email}
                          name='email'
                          onChange={handleChange}
                        />
                      )}
                    </td>
                    <td>
                      {selected != user.id ? (
                        <div>{user.username}</div>
                      ) : (
                        <input
                          value={fieldData.username}
                          name='username'
                          onChange={handleChange}
                        />
                      )}
                    </td>
                    <td>
                      {selected != user.id ? (
                        <div>{user.phone}</div>
                      ) : (
                        <input
                          value={fieldData.phone}
                          name='phone'
                          onChange={handleChange}
                        />
                      )}
                    </td>
                    <td>
                      {selected != user.id ? (
                        <div>{user.website}</div>
                      ) : (
                        <input
                          value={fieldData.website}
                          name='website'
                          onChange={handleChange}
                        />
                      )}
                    </td>
                    <td>{user.address.street}</td>
                    <td>{user.company.name}</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(user.id)}
                    >
                      X
                    </td>
                    <td onClick={() => handleEdit(user.id)}>Edit</td>
                    <td onClick={handleSave}>Save</td>
                  </tr>
                </tbody>
              ))}
          </>
        )}
      </table>
    </>
  );
};

export default Product;
