import React, { useState, useEffect } from "react";
import Forms from "./Form";
import Table from "./Table";

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [data, SetData] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = () => {
    let fdata = [...data];
    fdata.push({
      username: formData.username,
      password: formData.password
    });
    SetData(fdata);
    setFormData({
      username: "",
      password: ""
    });
  };
  return (
    <>
      <Forms
        handleInputChange={handleChange}
        Data={formData}
        handleFormSubmit={handleSubmit}
        username={formData.username}
        password={formData.password}
      />
      <Table data={data} />
    </>
  );
  // country.map((data, index) => <p>{data.name}</p>);
}
