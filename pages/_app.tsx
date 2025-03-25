import "@/styles/global.scss";
import type {AppProps} from "next/app";
import {AnimatePresence, motion} from "framer-motion";
import {PagesProgressBar as ProgressBar} from "next-nprogress-bar";

export default function App({Component,pageProps,router}:AppProps){
  return(
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{
          opacity: 0 
        }}
        animate={{
          opacity: 1
        }}
        exit={{ 
          opacity: 0 
        }}
        transition={{ 
          duration: 0.75
        }}
      >
        <ProgressBar
          height="4px"
          color="#8801f3"
          options={{ 
            showSpinner: true 
          }}
          shallowRouting
        />
        <Component {...pageProps}/>
      </motion.div>
    </AnimatePresence>
  );
}