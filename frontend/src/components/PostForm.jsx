function PostForm() {
  return (
    <form
      className="border border-t-0 p-1"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <textarea
        className="w-full outline-none text-sm overflow-hidden"
        type="text"
        placeholder="What' s happening?"
      />
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white rounded-md text-[10px] p-[2px] w-12 h-6">
          Submit
        </button>
      </div>
    </form>
  )
}

export default PostForm
