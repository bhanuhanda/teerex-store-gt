import { createBrowserRouter } from "react-router-dom";

import Cart from "../pages/Cart";
import Products from "../pages/Products";
import LayoutWithHeader from "../pages/LayoutWithHeader";

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
