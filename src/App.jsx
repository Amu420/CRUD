import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [fullname, setFullName] = useState("");
  const [phone, setphone] = useState("");
  const [contactList, setContactList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editList, setEditList] = useState({});

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

  // when we click delete button
  const delContact = (id) => {
    const filterContactlist = contactList.filter((data) => data.id != id);
    setContactList(filterContactlist);
  };

  //when we click edit icon this will run
  const editContact = (listdata) => {
    setIsEditing(true);
    setEditList({ ...listdata });
    console.log(data);
  };

  //This Handles the edit
  const handleEdit = (e) => {
    setEditList({ ...editList, [e.target.name]: e.target.value });
    console.log(editList);
  };

  //THIS WILL HANDLE DATA WHEN WE CLICK UPDATE AFTER EDIT
  const editSubmit = (e) => {
    e.preventDefault();
    const newList = contactList.map((item) =>
      item.id == editList.id ? { ...item, ...editList } : item
    );
    setContactList(newList);
    setIsEditing(false);
    setEditList({});
  };

  return (
    <div className="container">
      <div className="bg-dark text-white text-center fs-1 py-1 my-2">
        CRUD OPERATIONS
      </div>
      {isEditing ? (
        <div className="py-3">
          <form onSubmit={editSubmit}>
            <div className="mb-3">
              <label className="form-label fs-4">Name :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="fullname"
                value={editList.fullname}
                onChange={handleEdit}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fs-4">Phone :</label>
              <input
                type="number"
                className="form-control"
                placeholder="phone number"
                value={editList.phone}
                name="phone"
                onChange={handleEdit}
              />
            </div>
            <div className="my-3">
              <button className="btn btn-dark">Submit</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="py-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fs-4">Name :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fs-4">Phone :</label>
              <input
                type="number"
                className="form-control"
                placeholder="phone number"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div className="my-3">
              <button className="btn btn-dark">Submit</button>
            </div>
          </form>
        </div>
      )}

      {/* table for displaying data of form */}
      <div className="my-3">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Phone</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((list) => {
              return (
                <tr key={list.id}>
                  <td>{list.fullname}</td>
                  <td>{list.phone}</td>
                  <td>
                    <FaUserEdit
                      className="iconEdit"
                      onClick={() => editContact(list)}
                    />
                  </td>
                  <td>
                    <MdDelete
                      className="iconDelete"
                      onClick={() => delContact(list.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
