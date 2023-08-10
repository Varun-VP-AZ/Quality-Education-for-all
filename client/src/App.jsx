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
import Scholarship from "./pages/scholarship";
import Login from "./pages/login";
import Courses from "./pages/courses";
import Products from "./pages/product";
import Aboutus from "./pages/aboutus";
import Forum from "./pages/forum";

import Mathematics from "./forums/mathematics";
import Biology from "./forums/biology";
import Python from "./forums/python";
import English from "./forums/english";
import C from "./forums/c";
import CPP from "./forums/cpp";
import Chemistry from "./forums/chemistry";
import Economics from "./forums/economics";
import Java from "./forums/java";
import Communication from "./forums/communication";
import Management from "./forums/management";
import Physics from "./forums/physics";
import Hindi from "./forums/hindi";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="registration" element={<Signup />} />
      <Route path="scholarship" element={<Scholarship />} />
      <Route path="login" element={<Login />} />
      <Route path="courses" element={<Courses />} />
      <Route path="market" element={<Products />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="forum" element={<Forum />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/forum/biology" element={<Biology />} />
      <Route path="/forum/mathematics" element={<Mathematics />} />
      <Route path="/forum/economics" element={<Economics />} />
      <Route path="/forum/english" element={<English />} />
      <Route path="/forum/hindi" element={<Hindi />} />
      <Route path="/forum/physics" element={<Physics />} />
      <Route path="/forum/chemistry" element={<Chemistry />} />
      <Route path="/forum/java" element={<Java />} />
      <Route path="/forum/c" element={<C />} />
      <Route path="/forum/management" element={<Management />} />
      <Route path="/forum/cpp" element={<CPP />} />
      <Route path="/forum/communication" element={<Communication />} />
      <Route path="/forum/python" element={<Python />} />
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

export default App;
