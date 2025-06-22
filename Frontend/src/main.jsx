import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
// import HomePage from "./Routes/HomePage/HomePage.jsx";
// import MainLayout from "./Layouts/MainLayout.jsx";
// import Gallery from "./components/Gallery/Gallery.jsx";
// import CreatePage from "./Routes/CreatePage/CreatePage.jsx";
// import AuthPage from "./Routes/AuthPage/AuthPage.jsx";
// import PostPage from "./Routes/PostPage/PostPage.jsx";
// import SearchPage from "./Routes/SearchPage/SearchPage.jsx";
// import ProfilePage from "./Routes/ProfilePage/ProfilePage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomePage= React.lazy(()=> import("./Routes/HomePage/HomePage.jsx"));
const MainLayout= React.lazy(()=> import("./Layouts/MainLayout.jsx"));
const CreatePage= React.lazy(()=> import("./Routes/CreatePage/CreatePage.jsx"));
const AuthPage= React.lazy(()=> import("./Routes/AuthPage/AuthPage.jsx"));
const PostPage= React.lazy(()=> import("./Routes/PostPage/PostPage.jsx"));
const SearchPage= React.lazy(()=> import("./Routes/SearchPage/SearchPage.jsx"));
const ProfilePage= React.lazy(()=> import("./Routes/ProfilePage/ProfilePage.jsx"));

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/pins/:id" element={<PostPage />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
