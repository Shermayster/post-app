import * as React from "react";
import { v4 as uuid } from "uuid";
import { MdKeyboardArrowRight } from "react-icons/md";
export function PostForm({ onSubmit }) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  return (
    <form
      className="flex flex-col mt-10 bg-gradient-to-r from-lightBlue-500 to-indigo-500 rounded-xl"
      onSubmit={(e) => {
        e.preventDefault();
        const _id = uuid();
        onSubmit({ title, body, _id });
        setTitle("");
        setBody("");
      }}
    >
      <div className="p-6">
        <h3 className="text-3xl text-white uppercase text-left ml-4">
          Add Post
        </h3>
      </div>
      <div className="flex flex-col bg-white p-4">
        <label className="text-gray-500 capitalize pl-2" htmlFor="title">
          Title
        </label>
        <input
          className="p-2 focus:bg-blue-100 outline-none"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="text-gray-500 capitalize pl-2" htmlFor="body">
          content
        </label>
        <input
          className="p-2 focus:bg-blue-100 outline-none"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button
        className="text-white uppercase hover:bg-lightBlue-500 hover:text-lightBlue-100 p-4 rounded-b-xl flex justify-between items-center"
        type="submit"
      >
        <span>submit</span>
        <MdKeyboardArrowRight />
      </button>
    </form>
  );
}
