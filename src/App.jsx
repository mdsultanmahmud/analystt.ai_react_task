import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Details from "./component/Details/Details"
import Home from "./component/Home/Home"


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'/home/:id',
      element:<Details></Details>,
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)

    }
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
