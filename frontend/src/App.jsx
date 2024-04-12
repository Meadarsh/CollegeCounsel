import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/navBar";
import Home from "./Pages/Home/home";
import Blogs from "./Pages/Blogs/blogs";
import PostBlogs from "./ProtectedPages/postBlogs";
import ThemeProvider from 'src/theme';
import DashboardLayout from 'src/layouts/dashboard'; 


export const IndexPage = lazy(() => import('src/pages/app'));
const UserPage = lazy(() => import('src/pages/user'));
const LoginPage = lazy(() => import('src/pages/login'));
const ProductsPage = lazy(() => import('src/pages/products'));
const BlogPage = lazy(() => import('src/pages/blog'));
const Page404 = lazy(() => import('src/pages/page-not-found'));

function App() {
 

  return (
    <ThemeProvider>
      <Router>
        <>
          <NavBar />
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/post-blogs" element={<PostBlogs />} />
              <Route
                path="/admin/*"
                element={(
                  <DashboardLayout>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route path="/" element={<IndexPage />} />
                      <Route path="user" element={<UserPage />} />
                      <Route path="products" element={<ProductsPage />} />
                      <Route path="blog" element={<BlogPage />} />
                      {/* Other admin routes */}
                    </Routes>
                    </Suspense>
                  </DashboardLayout>
                )}
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/404" element={<Page404 />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
