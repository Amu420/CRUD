import React from "react";

function App() {
  return (
    <div className="container">
      <div className="bg-dark text-white text-center fs-1 py-1 my-2">
        CRUD OPERATIONS
      </div>
      <div className="py-3">
        <form onSubmit="">
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
        </form>
      </div>
    </div>
  );
}

export default App;
