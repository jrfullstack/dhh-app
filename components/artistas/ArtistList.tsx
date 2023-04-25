import { IArtist } from "@/interfaces";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material"
import { FC } from "react"
import { ArtistCard } from "./ArtistCard";


interface Props {
	artistas: IArtist[];
}

export const ArtistaList: FC <Props> = ({artistas}) => {
	return (
        <Grid container spacing={4}>
            {artistas.map((artista) => (
				// poner el id
                <ArtistCard key={artista.slug} artista={artista} />
            ))}
        </Grid>
    );
}
