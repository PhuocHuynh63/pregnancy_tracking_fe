import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import { ROUTES } from './routes'
import LayoutMain from './layouts/Main'

function App() {

  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <LayoutMain Component={HomePage} />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
