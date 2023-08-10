import { useState, useEffect } from "react";


function Course() {
  const [Courses, setCourses] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    faculty: "",
    language: "",
    subject:"",
    date:"",
    url: "",
  });

  const [filterLocation, setFilterLocation] = useState("");
  const [filterTopic, setFilterTopic] = useState("");

  const [searchItem, setSearchItem] = useState("");
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);
  const [isProductVisible, setIsProductVisible] = useState(true);

  useEffect(() => {
    // Fetch data from the MongoDB server
    fetch("http://localhost:5000/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching Courses:", error));
  }, [newProduct]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const addProduct = () => {
    // Send a POST request to add a new product
    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((newProductData) => {
        // Update the Courses state with the new product
        setCourses([...Courses, newProductData]);
        // Clear the input fields
        setNewProduct({
            title: "",
            description: "",
            faculty: "",
            language: "",
            subject:"",
            date:"",
            url: "",
        });
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  const filteredCourses = Courses.filter((image) => {
    const locationMatch = filterLocation
      ? image.subject.toLowerCase() === filterLocation.toLowerCase()
      : true;
    const itemMatch = searchItem
      ? image.title.toLowerCase().includes(searchItem.toLowerCase())
      : true;
    return locationMatch && itemMatch;
  });



  const toggleAddProductVisibility = () => {
    setIsAddProductVisible(!isAddProductVisible);
    setIsProductVisible(!isProductVisible);
  };

  return (
    <div className="image-gallery h-screen justify-center bg-gray-900 p-6 ml-3">
      <button
        onClick={toggleAddProductVisibility}
        className="bg-green-500 m-2 text-white py-2 px-4 rounded-lg hover:bg-green-600 fixed bottom-10 right-10 p-4"
      >
        {isAddProductVisible ? "View Course" : "Add Course"}
      </button>
      {isAddProductVisible && (
        <div className="bg-white justify-center rounded-lg shadow-md p-4 flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newProduct.title}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="faculty"
            placeholder="Faculty"
            value={newProduct.faculty}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
            <input
            type="text"
            name="language"
            placeholder="Language"
            value={newProduct.language}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
            <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={newProduct.subject}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
            <input
            type="text"
            name="date"
            placeholder="Date"
            value={newProduct.date}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="url"
            placeholder="Course URL"
            value={newProduct.url}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <button
            onClick={addProduct}
            className="bg-green-500 text-white py-2 px-4 rounded-lg text-xl hover:bg-green-600"
          >
            Add Course
          </button>
        </div>
      )}
      {isProductVisible && (
        <div>
          <div className=" flex mt-4 mb-4 space-x-4">
            <input
              type="text"
              placeholder="Filter by Subjects"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className=" placeholder-gray-800 rounded-md p-2 w-1/2"
            />

            <input
              type="text"
              placeholder="Search by Topic"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className=" placeholder-gray-800 rounded-md p-2 w-1/2"
            />
          </div>
          <div className=" max-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
              >

                <div className="mt-2">
                  <h2 className="text-3xl  font-semibold mb-9">{image.title}</h2>
                  <h2 className="text-xl font-semibold my-4">Subject:{image.subject}</h2>
                  <p className="text-gray-700 mb-7">{image.description}</p>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Faculty:{image.faculty}</h2>
                    <h2 className="text-lg font-semibold">Date:{image.date}</h2>
                    
                    <h2 className="text-lg text-gray-600">{image.location}</h2>
                    <a href={image.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Link
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Course;
