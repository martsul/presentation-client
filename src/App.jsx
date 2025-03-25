import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { UserContextProvider } from "./contexts/user-context/user-context-provider";

export const App = () => {
    const router = createBrowserRouter([{ path: "/", element: <MainPage /> }]);

    return (
        <UserContextProvider>
            <RouterProvider router={router} />
        </UserContextProvider>
    );
};
