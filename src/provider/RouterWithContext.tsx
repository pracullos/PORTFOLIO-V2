import { RouterProvider } from "@tanstack/react-router";
import { router } from "../router"
import { queryClient } from "./AppProviders";

export function RouteWithContext(){

    return <RouterProvider router={router} context={{ queryClient }} />

}