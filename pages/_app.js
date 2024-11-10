// pages/_app.js
import Layout from "./components/Layout";
import { AnimatePresence } from "framer-motion";
import "../styles/global.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Layout key={router.route}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
