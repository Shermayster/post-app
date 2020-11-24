import * as React from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostForm } from "./PostForm";
function App() {
  const [postList, setPostList] = React.useState([]);

  return (
    <div className="bg-gray-200 h-screen">
      <header className="bg-white p-6">
        <span className="text-4xl">My awesome app</span>
      </header>
      <main className="flex flex-col md:flex-row md:justify-around gap-10 items-center md:my-10 mx-1 my-00 xl:mx-20">
        <div className="max-w-lg md:w-1/2 w-2/3 xl:w-1/3">
          <PostForm
            onSubmit={(item) => {
              setPostList([...postList, item]);
            }}
          />
        </div>
        <div className="flex flex-col gap-5 items-center max-w-lg md:w-1/2 w-2/3 xl:w-1/3">
          {postList.map(({ title, body, _id }) => (
            <Post
              onDelete={() => {
                setPostList(postList.filter((item) => item._id !== _id));
              }}
              key={_id}
              title={title}
              body={body}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function Post({ title, body, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-lg w-full">
      <div className="bg-gradient-to-tr from-cyan-400 to-lightBlue-500 text-white rounded-xl  rounded-b-none px-6 py-2 flex justify-between items-center">
        <div className="uppercase">{title}</div>
        <button onClick={onDelete}>
          <MdDeleteForever title="delete post" />
        </button>
      </div>
      <div className="px-6 py-2">{body}</div>
    </div>
  );
}

export default App;
