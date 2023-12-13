import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './layouts/Layout';
import About from './components/About';
import Home from './components/Home'
import Contact from './components/Contact'
import NewsItem from "./components/NewsItem";

const router = createBrowserRouter([
  {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: 'about/',
      element: <About />
    },
    {
      path: 'contact/',
      element: <Contact />
    },
    {
      path: 'news/:id',
      element: <NewsItem />
    },
  ]
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
      </>
  )
}

export default App
