import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Layout from "./components/layout";
import Login from "./pages/login";
import Courses from "./pages/courses";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="registration" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="courses" element={<Courses/>}/>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// function App() {
//   return <></>;
// }

export default App;