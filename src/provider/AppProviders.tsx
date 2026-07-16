import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouteWithContext } from "./RouterWithContext";

export const queryClient = new QueryClient()

export function AppProviders() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouteWithContext />
        </QueryClientProvider>
    )
}