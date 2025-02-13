import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Cart from './Pages/reducer/Cart';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
