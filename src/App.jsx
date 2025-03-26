import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { UserContextProvider } from "./contexts/user-context/user-context-provider";
import { LoadingContextProvider } from "./contexts/loading-context/loading-context-provider";
import { LoginContextProvider } from "./contexts/login-context/login-context-provider";

export const App = () => {
    const router = createBrowserRouter([{ path: "/", element: <MainPage /> }]);

    return (
        <UserContextProvider>
            <LoadingContextProvider>
                <LoginContextProvider>
                    <RouterProvider router={router} />
                </LoginContextProvider>
            </LoadingContextProvider>
        </UserContextProvider>
    );
};
