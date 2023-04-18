import '@/styles/globals.css'
import { Fira_Code } from '@next/font/google'
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

const firaCode = Fira_Code ({
  subsets: ["latin"],
})

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <main className={firaCode.className}>
          <Component {...pageProps} />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
