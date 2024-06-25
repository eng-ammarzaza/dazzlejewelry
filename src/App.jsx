import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { getProduct, getProducts } from "./services/ProductsAPI";
import { getStore } from "./services/StoresAPI";
import Home, { loader as homeLoader, loader } from "./pages/Home";
import Products from "./pages/Products";
import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Store from "./pages/Store";
import Collection from "./pages/Collection";
import NotFound from "./pages/NotFound";
import Wishlist from "./pages/Wishlist";
import { getWishlist } from "./services/WishlistAPI";
import OrderComplete from "./pages/OrderComplete";
import Checkout from "./pages/Checkout";
import AppErrorBoundary from "./ui/AppErrorBoundary";

const router = createBrowserRouter([
  {
    errorElement: <AppErrorBoundary />,
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-complete",
        element: <OrderComplete />,
      },
      {
        path: "products",
        element: <Products loader={loader} />,
        loader: ({ request }) => {
          return getProducts({
            collection: "normal",
          });
        },
      },
      {
        path: "products/:productID",
        element: <Product />,
        loader: ({ params }) => {
          return getProduct(params.productID);
        },
      },
      {
        path: "stores/:store",
        element: <Store />,
        loader: ({ params }) => {
          return getStore(params.store);
        },
      },
      {
        path: "collections/:collection",
        element: <Collection />,

        loader: ({ params }) => {
          return getProducts({
            collection: params.collection,
          });
        },
      },
      {
        path: "wishlist",
        element: <Wishlist />,
        loader: getWishlist,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
