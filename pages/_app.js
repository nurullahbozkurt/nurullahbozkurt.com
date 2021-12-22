//import "tailwindcss/tailwind.css";
import "../styles/style.css";
import { useEffect } from "react";
import { ContextProvider, useNurullah } from "../contexts/context";

function MyApp({ Component, pageProps }) {
  const { dark, toggle } = useNurullah();

  useEffect(() => {
    if (dark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    if (!toggle) {
      document.querySelector("html").classList.add("overflow-hidden");
    } else {
      document.querySelector("html").classList.remove("overflow-hidden");
    }
  }, [dark, toggle]);

  return <Component {...pageProps} />;
}

const AppWithContext = (props) => {
  return (
    <ContextProvider>
      <MyApp {...props} />
    </ContextProvider>
  );
};

export default AppWithContext;
