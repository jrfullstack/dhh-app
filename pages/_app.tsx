import "@/styles/globals.css";
import { EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";

import { SWRConfig } from "swr";

import PageProvider from "@/helpers/PageProvider";
import { AuthProvider, UiProvider } from "@/context";

export interface MUIAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps, emotionCache }: MUIAppProps) {
    
    return (
        <PageProvider emotionCache={emotionCache}>
            <SWRConfig
                value={{
                    fetcher: (resource, init) =>
                        fetch(resource, init).then((res) => res.json()),
                }}>
                <AuthProvider>
                    <UiProvider>
                        <Component {...pageProps} />
                    </UiProvider>
                </AuthProvider>
            </SWRConfig>
        </PageProvider>
    );
}

