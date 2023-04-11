import type { AppProps } from 'next/app';
import { darkTheme } from '@/themes'
import { ThemeProvider } from '@mui/material'
import CssBaseline from "@mui/material/CssBaseline";
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    );  
}
