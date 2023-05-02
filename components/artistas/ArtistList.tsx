import { FC } from "react";
import { Grid } from "@mui/material";
import { IArtist } from "@/interfaces";
import { ArtistCard } from "./ArtistCard";


interface Props {
	artists: IArtist[];
}

export const ArtistaList: FC <Props> = ({artists: artistas}) => {
	return (
        <Grid container spacing={2}>
            {artistas.map((artista) => (
                    <ArtistCard key={artista._id} artista={artista} />
                ))
            }
        </Grid>
    );
}
