import React, { useState } from "react";

const InputTags = () => {
  // State - Credentials
  const [credentials, setCredentials] = useState("");
  // State - Tags
  const [tags, setTags] = useState([]);
  // State - marginLeft
  const [width, setWidth] = useState("");

  // Function onChange - HandleChange - credentials
  const HandleChange = (e) => {
    const { value } = e.currentTarget;
    setCredentials(value);
    const regex = /\s/g;
    if (regex.test(value)) {
      setTags([...tags, value]);
      setCredentials("");
      setTimeout(() => {
        if (tags.length + 1 === 5) {
          document.getElementById("tags-list").disabled = true;
        }
        setWidth(document.getElementsByClassName("tags-added")[0].offsetWidth);
      }, 100);
    }
  };

  // Function onClick - HandleClick - Focus Input
  const HandleClick = () => {
    document.getElementById("tags-list").focus();
  };

  // Function onClick - handleDelete - Delete the tag
  const handleDelete = (index) => {
    const array = [];
    for (let i = 0; i < tags.length; i++) {
      if (i !== index) {
        array.push(tags[i]);
      }
    }
    setTags(array);
    setTimeout(() => {
      setWidth(document.getElementsByClassName("tags-added")[0].offsetWidth);
    }, 10);
    document.getElementById("tags-list").disabled = false;
  };

  return (
    <>
      <div className="tags" onClick={HandleClick}>
        <div className="tags-added">
          {tags.map((tag, index) => (
            <span key={index}>
              {tag}{" "}
              <span className="delete-tag" onClick={() => handleDelete(index)}>
                x
              </span>
            </span>
          ))}
        </div>
        <input
          type="text"
          onChange={HandleChange}
          value={credentials}
          name="tags-list"
          id="tags-list"
          style={{ marginLeft: width + "px" }}
        />
      </div>
    </>
  );
};

export default InputTags;
