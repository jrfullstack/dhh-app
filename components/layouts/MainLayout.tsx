import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar, SideMenu } from "../ui";

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children?: ReactNode;
}


export const MainLayout:FC<Props> = ({children, title, pageDescription, imageFullUrl}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />

                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />

                {imageFullUrl && (
                    <meta name="og:image" content={imageFullUrl} />
                )}
            </Head>

            <nav>
                <Navbar/>
            </nav>
        
            <SideMenu/>

            <main
                style={{
                    margin: "130px auto",
                    maxWidth: "1440px", // corregir para q ocupe toda la pantalla
                    padding: "0px 30px"
                }}>
                {children}
            </main>
            <footer>{/* TODO: footer */}</footer>
        </>
    );
}
