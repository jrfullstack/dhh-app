import { NextPage, GetServerSideProps } from "next";

import { Box, Typography } from "@mui/material";
import { MainLayout } from "@/components/layouts";

import { ArtistaList } from "@/components/artistas";
import { dbArtists } from "@/database";
import { IArtist } from "@/interfaces";

interface Props {
    artists: IArtist[];
    foundArtists: boolean;
    query: string;
}


const SearchPage: NextPage<Props> = ({artists, foundArtists, query}) => {

    // const { artists, isLoading } = useArtists("/artists");

    return (
        <MainLayout
            title={"Buscador | DHH"}
            pageDescription={"Pagina Oficial del Hip Hop Dominicano"}>
            <Typography variant="h1" sx={{ mb: 1 }}>
                Buscar contenido
            </Typography>

            {foundArtists ? (
                <Typography
                    variant="h2"
                    sx={{ mb: 1 }}
                    textTransform="capitalize">
                    Busqueda: {query}
                </Typography>
            ) : (
                <Box display={"flex"}>
                    <Typography variant="h2" sx={{ mb: 1 }}>
                        No encontramos ningún contenido:
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ ml: 1 }}
                        color="secondary"
                        textTransform="capitalize">
                        {query}
                    </Typography>
                </Box>
            )}

            <ArtistaList artists={artists} />
        </MainLayout>
    );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    const { query = '' } = params as {query: string};

    if(query.length === 0 ) {
        return{
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    let artists = await dbArtists.getArtistsByTerm(query);

    // si no existe la busqueda
    const foundArtists = artists.length > 0;
    if(!foundArtists) {
        artists = await dbArtists.getAllArtists();
    }

    return {
        props: {
            artists,
            foundArtists,
            query,
        },
    };
}


export default SearchPage;
