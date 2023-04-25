import { FC } from 'react';
import { IArtist } from '@/interfaces';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
interface Props {
  artista: IArtist;
}

export const ArtistCard: FC<Props> = ({artista}) => {
    return (
        <Grid item xs={6} sm={2} className="fadeIn">
            <Card sx={{ maxWidth: 300 }} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={`img/artistas/${artista.imgPortada}`}
                        alt={artista.interprete}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography
                        variant="body1"
                        color="initial"
                        style={{ fontWeight: "bold", textAlign: "center" }}>
                        {artista.interprete}
                    </Typography>
                </CardContent>
                {/* <CardActions> */}
                <Box textAlign={"center"}>
                    <Box
                        sx={{
                            mb: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <FavoriteBorderOutlined fontSize="small" />
                        {artista.suscriptores} Suscriptores
                    </Box>

                    <Button
                        variant="contained"
                        sx={{ mb: 2, paddingX: 3 }}
                        color="error"
                        startIcon={<FavoriteOutlined />}>
                        Suscribete
                    </Button>
                </Box>

                {/* </CardActions> */}
            </Card>
            {/* <Box sx={{ mt: 1 }} className="fadeIn"></Box> */}
        </Grid>
    );
}
