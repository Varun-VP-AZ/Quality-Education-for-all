import { useState, useEffect } from "react";


function AddCourse() {
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



  return (
    <div className="image-gallery h-screen justify-center bg-gray-900 p-6 ml-3">
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
        </div>
  );
}

export default AddCourse;
