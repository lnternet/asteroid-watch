import "./app.css";
import { createRoot } from "react-dom/client";
import { useAsteroidData } from "./hooks/useAsteroidData.hook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "./components/container/Container";

export default function App() {
  const { data, isLoading, error } = useAsteroidData(false);

  if (isLoading) return <div>Loading!</div>;
  if (error || !data) return <div>Error!</div>;
  return <Container data={data} />;
}

const container = document.getElementById("root")!;
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
