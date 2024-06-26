import HomePage from './routers/homePage/HomePage';
import ListPage from './routers/listPage/ListPage';
import Layout from './routers/layout/Layout';
import SinglePage from './routers/singlePage/SinglePage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Profile from './routers/profilePage/Profile';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/profile",
          element: <Profile/>
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App