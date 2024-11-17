import { RouterProvider } from "react-router-dom";
import router from "./utilities/Router";
import MyContextProvider from "./components/ContextProvider";

function App() {
  return (
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  );
}

export default App;

