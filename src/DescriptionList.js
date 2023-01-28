import React, { useState } from "react";
import "./DescriptionList.css";

function DescriptionList() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Roberta Flax");

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    setEditing(false);
  }

  return (
    <dl>
      <dt>Name</dt>
      <dd>
        {editing ? (
          <>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div>
              <button onClick={handleSave}>Save</button>
            </div>
          </>
        ) : (
          <>
            {name}
            <div>
              <button onClick={handleEdit}>Edit name</button>
            </div>
          </>
        )}
      </dd>
    </dl>
  );
}

export default DescriptionList;
