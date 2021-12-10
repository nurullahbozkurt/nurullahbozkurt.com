//import "tailwindcss/tailwind.css";
import "../styles/style.css";
import { ContextProvider } from "../contexts/context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
