import React, { useState } from "react";

function App() {
  const [fullname, setFullName] = useState("");
  const [phone, setphone] = useState("");
  const [contactList, setContactList] = useState([]);

  // this will handle the submit button when pressed
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactList([
      ...contactList,
      {
        id: contactList.length + 1,
        fullname: fullname,
        phone: phone,
      },
    ]);
    setFullName("");
    setphone("");
    console.log(contactList);
  };
  return (
    <div className="container">
      <div className="bg-dark text-white text-center fs-1 py-1 my-2">
        CRUD OPERATIONS
      </div>
      <div className="py-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fs-4">Name :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fs-4">Phone :</label>
            <input
              type="number"
              className="form-control"
              placeholder="phone number"
            />
          </div>
          <div className="my-3">
            <button className="btn btn-dark">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
