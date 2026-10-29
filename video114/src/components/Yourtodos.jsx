import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

const Yourtodos = (props) => {
  const visibleTodos = props.todotaskset.filter(
    todo => props.showfinished || !todo.isCompleted
  );

  return (
    <div className="
      yourtodosui
      bg-gray-500
      w-[calc(100%-1rem)] sm:w-[80vw] lg:w-[75vw]
      max-w-5xl
      rounded-2xl sm:rounded-4xl
      my-3 mx-auto
      p-3 sm:p-5
      flex flex-col items-center
      min-h-[60vh] sm:min-h-[70vh]
      gap-4 sm:gap-6
    ">

      {/* Header */}
      <div className="
        yourtodoheader
        bg-black text-white
        w-full sm:w-[90%] lg:w-[75%]
        rounded-2xl sm:rounded-full
        p-3 sm:px-5 sm:py-3
        flex flex-col
        items-center justify-center
        gap-2
      ">

        <h3 className="font-mono font-bold text-base sm:text-lg">
          Your Todos
        </h3>

        <div className="flex items-center justify-center gap-2">
          <input
            id="showfinished"
            type="checkbox"
            checked={props.showfinished}
            onChange={props.showfinishedfunc}
            className="h-4 w-4 shrink-0 cursor-pointer accent-pink-500"
          />

          <label
            htmlFor="showfinished"
            className="
              text-xs sm:text-sm
              text-pink-400
              font-mono font-bold
              cursor-pointer
            "
          >
            Show Finished Tasks
          </label>
        </div>

      </div>

      {/* Todo List */}
      {props.todotaskset.length === 0 ? (

        <div className="
          text-amber-300
          font-mono font-bold
          text-center text-sm sm:text-base
          mt-4
        ">
          No todos available. Add one to get started!
        </div>

      ) : visibleTodos.length === 0 ? (

        <div className="
          text-amber-300
          font-mono font-bold
          text-center text-sm sm:text-base
          mt-4
        ">
          All tasks are completed. Enable "Show Finished Tasks" to view them.
        </div>

      ) : (

        <div className="w-full flex flex-col items-center gap-3 sm:gap-4">

          {visibleTodos.map((items) => (

            <div
              key={items.id}
              className="
                actualtodo
                bg-gray-700/40
                w-full sm:w-[90%] lg:w-[80%]
                rounded-xl
                p-3 sm:p-4
                flex items-center
                gap-3 sm:gap-4
              "
            >

              {/* Completion Checkbox */}
              <input
                type="checkbox"
                checked={items.isCompleted}
                onChange={(e) =>
                  props.handleCheckbox(items.id, e.target.checked)
                }
                aria-label={`Mark ${items.todotask} as ${
                  items.isCompleted ? 'incomplete' : 'completed'
                }`}
                className="
                  h-4 w-4 sm:h-5 sm:w-5
                  shrink-0
                  cursor-pointer
                  accent-pink-500
                "
              />

              {/* Todo Text */}
              <div
                className="
                  text
                  min-w-0 flex-1
                  wrap-break-words
                  text-amber-300
                  font-mono font-bold
                  text-sm sm:text-base
                "
                style={{
                  textDecoration: items.isCompleted
                    ? 'line-through'
                    : 'none',
                  opacity: items.isCompleted ? 0.7 : 1
                }}
              >
                {items.todotask}
              </div>

              {/* Action Buttons */}
              <div className="
                edidelbut
                flex items-center
                gap-2
                shrink-0
              ">

                <button
                  type="button"
                  onClick={() => props.handleEdit(items.id)}
                  aria-label={`Edit ${items.todotask}`}
                  title="Edit todo"
                  className="
                    border border-blue-400
                    rounded-full
                    p-2
                    bg-blue-500
                    hover:bg-blue-600
                    active:scale-95
                    cursor-pointer
                    text-white
                    text-base sm:text-lg
                    transition
                  "
                >
                  <MdEdit />
                </button>

                <button
                  type="button"
                  onClick={() => props.handleDelete(items.id)}
                  aria-label={`Delete ${items.todotask}`}
                  title="Delete todo"
                  className="
                    border border-red-400
                    rounded-full
                    p-2
                    bg-red-500
                    hover:bg-red-600
                    active:scale-95
                    cursor-pointer
                    text-white
                    text-base sm:text-lg
                    transition
                  "
                >
                  <MdDelete />
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Yourtodos;