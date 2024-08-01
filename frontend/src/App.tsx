import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Error from "./pages/Error";
import Blogs from "./pages/Blogs";
import Create_blog from "./pages/Create_blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/create_blog" element={<Create_blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
