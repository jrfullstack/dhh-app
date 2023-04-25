import { EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import PageProvider from "@/helpers/PageProvider";

export interface MUIAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps, emotionCache }: MUIAppProps) {
    return (        
        <PageProvider emotionCache={emotionCache}>
            <Component {...pageProps} />
        </PageProvider>
    );
}
