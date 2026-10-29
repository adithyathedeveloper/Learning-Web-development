import React from 'react'

const Todoadd = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAdd()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="todoui mx-auto my-3 w-full px-3 flex justify-center"
    >
      <div className="
        todoheader
        bg-black text-white
        w-full xl:w-[75%]
        rounded-2xl xl:rounded-full
        p-4 xl:px-8 xl:py-3
        flex flex-col xl:flex-row
        items-center justify-center
        gap-3 xl:gap-5
      ">

        <h3 className="font-mono text-sm text-center whitespace-nowrap">
          Add/Edit a todo:
        </h3>

        <div className="forinput flex items-center justify-center gap-2 w-full xl:w-auto">
          <input
            onChange={props.handleChange}
            value={props.todotask}
            className="
              border-2 border-gray-400
              rounded-full
              px-3 py-2
              w-full min-w-0
              xl:w-[50vh]
              text-sm
              outline-none
              focus:border-blue-400
            "
            type="text"
            name="todoadder"
            id="todoadder"
          />

          <button
            type="submit"
            className="
              border-2 border-blue-400
              rounded-full
              px-4 py-2
              bg-blue-500
              hover:bg-blue-600
              cursor-pointer
              text-sm font-semibold
              shrink-0
            "
          >
            Save
          </button>
        </div>

      </div>
    </form>
  )
}

export default Todoadd