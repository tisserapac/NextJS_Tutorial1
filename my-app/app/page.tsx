import Image from "next/image";
import type { Todo } from "@/types.js";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      List Page
      <div className="flex flex-col w-10/12 bg-gray-900 p-4 rounded-md shadow-2xl my-4">
      <div className="w-full flex justify-between px-4 opacity-50 mb-2 text-slate-100">
          <div>Title</div>
          <div>Category</div>
          <div>Status</div>
        </div>
          {todos.map((todo, idx) => (
            <>
            <div className={`${
                idx === 0
                  ? "rounded-t-md"
                  : todos.length - 1 === idx
                  ? "rounded-b-md"
                  : ""
              } bg-gray-600 hover:bg-gray-500 cursor-pointer shadow-md flex w-full justify-between p-4 text-slate-100`}
              >
              <div>{todo.toDoTitle}</div>
              <div>{todo.toDoCategory}</div>
              <div>{todo.toDoCompleted ? "Completed" : "Not Completed"}</div>
            </div>
            </>
          ))}
      </div>
    </div>
  );
}
