import { FC } from "react";
import { Grid } from "@mui/material";
import { IArtist } from "@/interfaces";
import { ArtistCard } from "./ArtistCard";


interface Props {
	artistas: IArtist[];
}

export const ArtistaList: FC <Props> = ({artistas}) => {
	return (
        <Grid container spacing={4}>
            {artistas.map((artista) => (
                    // TODO: poner el id
                    <ArtistCard key={artista.slug} artista={artista} />
                ))
            }
        </Grid>
    );
}
