import "./App.css";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import ProfileBrowser from "./pages/ProfileBrowser/ProfileBrowser";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import HomeProvider from "./store/HomeProvider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProfileBrowser /> },
      { path: "/browse", element: <ProfileBrowser /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <HomeProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>

    </HomeProvider>
  );
}

export default App;
