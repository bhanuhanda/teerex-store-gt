import { createBrowserRouter } from "react-router-dom";

import Cart from "../pages/CartListing";
import Products from "../pages/ProductListing";
import LayoutWithHeader from "../pages/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutWithHeader />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ]
    },
  ], {
    basename: "/teerex-store-gt",
  }
);

export default router;
