import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main/mainPage";



export const router = createBrowserRouter([
    {
        path: 'fiesta_test',
        element: <MainPage />
    },
])