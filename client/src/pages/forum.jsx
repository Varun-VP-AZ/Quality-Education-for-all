function Forum() {
  return (
    <div>
      <div className=" p-20 bg-gray-800">
        {/* Discussion Threads */}
        <div className="bg-white bg-gray-900shadow-md rounded-lg p-4">
          {/* Single Thread */}
          <div className="border-b border-gray-300 py-4">
            <h2 className="text-lg font-semibold">Thread Title</h2>
            <p className="text-gray-600">Posted by John Doe</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>
          {/* Single Thread */}
          <div className="border-b border-gray-300 py-4">
            <h2 className="text-lg font-semibold">Another Thread Title</h2>
            <p className="text-gray-600">Posted by Jane Smith</p>
            <p className="mt-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco...
            </p>
          </div>
          {/* Add New Thread */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Add a New Thread</h2>
            <form className="mt-2">
              <div className="mb-4">
                <label
                  htmlFor="threadTitle"
                  className="block text-gray-700 font-semibold"
                >
                  Thread Title
                </label>
                <input
                  type="text"
                  id="threadTitle"
                  name="threadTitle"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="threadContent"
                  className="block text-gray-700 font-semibold"
                >
                  Thread Content
                </label>
                <textarea
                  id="threadContent"
                  name="threadContent"
                  className="w-full px-3 py-2 border rounded-lg"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Post Thread
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
