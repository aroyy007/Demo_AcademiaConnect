// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import {
//   AllUsers,
//   CreatePost,
//   EditPost,
//   Explore,
//   Home,
//   PostDetails,
//   Profile,
//   Saved,
//   UpdateProfile,
// } from "./_root/pages";
// import SigninForm from "./_auth/Forms/SigninForm.jsx";
// import SignupForm from "./_auth/Forms/SignupForm.jsx";
// import AuthLayout from "./_auth/AuthLayout.jsx";
// import RootLayout from "./_root/RootLayout.jsx";
// import { Toaster } from "./components/ui/toaster";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       {/* Public Routes */}
//       <Route element={<AuthLayout />}>
//         <Route path="/sign-in" element={<SigninForm />} />
//         <Route path="/sign-up" element={<SignupForm />} />
//       </Route>

//       {/* Private Routes */}
//       <Route element={<RootLayout />}>
//         <Route index element={<Home />} />
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/saved" element={<Saved />} />
//         <Route path="/all-users" element={<AllUsers />} />
//         <Route path="/create-post" element={<CreatePost />} />
//         <Route path="/update-post/:id" element={<EditPost />} />
//         <Route path="/posts/:id" element={<PostDetails />} />
//         <Route path="/profile/:id" element={<Profile />} />
//         <Route path="/profile/:id/liked-posts" element={<Profile />} />
//         <Route path="/update-profile/:id" element={<UpdateProfile />} />
//       </Route>
//     </>
//   )
// );

// Import or define your Loader component
import Loader from "./components/shared/Loader";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { Toaster } from "./components/ui/toaster";
const Home = lazy(() => import("./_root/pages/Home"));
const Explore = lazy(() => import("./_root/pages/Explore"));
const Saved = lazy(() => import("./_root/pages/Saved"));
const AllUsers = lazy(() => import("./_root/pages/AllUsers"));
const CreatePost = lazy(() => import("./_root/pages/CreatePost"));
const EditPost = lazy(() => import("./_root/pages/EditPost"));
const PostDetails = lazy(() => import("./_root/pages/PostDetails"));
const Profile = lazy(() => import("./_root/pages/Profile"));
const UpdateProfile = lazy(() => import("./_root/pages/UpdateProfile"));
const SigninForm = lazy(() => import("./_auth/Forms/SigninForm.jsx"));
const SignupForm = lazy(() => import("./_auth/Forms/SignupForm.jsx"));
const AuthLayout = lazy(() => import("./_auth/AuthLayout.jsx"));
const RootLayout = lazy(() => import("./_root/RootLayout.jsx"));

// Define lazy imports as shown above

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route
        element={
          <Suspense fallback={<Loader />}>
            <AuthLayout />
          </Suspense>
        }
      >
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={<Loader />}>
              <SigninForm />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={<Loader />}>
              <SignupForm />
            </Suspense>
          }
        />
      </Route>

      {/* Private Routes */}
      <Route
        element={
          <Suspense fallback={<Loader />}>
            <RootLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/explore"
          element={
            <Suspense fallback={<Loader />}>
              <Explore />
            </Suspense>
          }
        />
        <Route
          path="/saved"
          element={
            <Suspense fallback={<Loader />}>
              <Saved />
            </Suspense>
          }
        />
        <Route
          path="/all-users"
          element={
            <Suspense fallback={<Loader />}>
              <AllUsers />
            </Suspense>
          }
        />
        <Route
          path="/create-post"
          element={
            <Suspense fallback={<Loader />}>
              <CreatePost />
            </Suspense>
          }
        />
        <Route
          path="/update-post/:id"
          element={
            <Suspense fallback={<Loader />}>
              <EditPost />
            </Suspense>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <Suspense fallback={<Loader />}>
              <PostDetails />
            </Suspense>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="/profile/:id/liked-posts"
          element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="/update-profile/:id"
          element={
            <Suspense fallback={<Loader />}>
              <UpdateProfile />
            </Suspense>
          }
        />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <main className="flex h-screen">
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
