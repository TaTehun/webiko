import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import "@fontsource/lato"

function MainApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MainApp;