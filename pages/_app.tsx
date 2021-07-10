import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../src/context/Auth'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
// import '../styles/globals.css'
// import {AppProps} from "next/app";
// import initAuth from '../initAuth' // the module you created above

// initAuth()

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp