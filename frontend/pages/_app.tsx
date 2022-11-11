import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BaseStyles, ThemeProvider, Box } from '@primer/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Box fontFamily={"normal"}>
          <Component {...pageProps} />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  )
}
