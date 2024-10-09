import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "@/pages/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<LandingPage />} />)
);

export default function App() {
  return <RouterProvider router={router} />;
}
