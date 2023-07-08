import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "pages/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<Routing />
				</ThemeProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
