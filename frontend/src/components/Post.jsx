function Post() {
  return (
    <div className="border text-sm p-1 mt-1">
      <p>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit.consectetur adipisicing
        elit.
      </p>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white rounded-md text-[10px] mr-1 p-[2px] w-12 h-6">
          Update
        </button>
        <button className="bg-blue-500 text-white rounded-md text-[10px] p-[2px] w-12 h-6">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Post
