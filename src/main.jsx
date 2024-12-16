import { createRoot } from "react-dom/client";
import "animate.css";
import "swiper/css";
import "./index.css";
import { Provider } from "react-redux";
import { router } from "./routes/router";
import { store } from "./store/store.js";
import { RouterProvider } from "react-router-dom";
import { Providers } from "./global/GlobalContext";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </Provider>
);
