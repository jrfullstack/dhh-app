import { FC } from "react";
import { EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import { darkTheme, lightTheme } from "@/themes";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@/styles/globals.css";
import PageProvider from "@/helpers/PageProvider";

export interface MUIAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps, emotionCache }: MUIAppProps) {
    return (
        // <ThemeProvider theme={lightTheme}>
        //     <CssBaseline />
        <PageProvider emotionCache={emotionCache}>
            <Component {...pageProps} />
        </PageProvider>
        // </ThemeProvider>
    );
}
