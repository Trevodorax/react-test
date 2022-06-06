import React from "react";

function CreateArea(props) {

  return (
    <div>
      <form onSubmit={props.addNote}>
        <input
          name="title"
          placeholder="Title"
          value={props.titleInputText}
          onChange={props.updateTitleInputText}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.contentInputText}
          onChange={props.updateContentInputText}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
