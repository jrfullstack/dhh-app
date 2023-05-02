import { FC } from 'react';
import NextLink from "next/link";
import { IArtist } from '@/interfaces';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
interface Props {
  artista: IArtist;
}

export const ArtistCard: FC<Props> = ({artista}) => {
    return (
        <Grid item xs={6} sm={2} className="fadeIn">
            <Card sx={{ maxWidth: 300 }} variant="outlined">
                <NextLink
                    href="/artistas/slug"
                    passHref
                    legacyBehavior
                    prefetch={false}>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={`/img/artistas/${artista.imgPortada}`}
                                alt={artista.interprete}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>

                <CardContent>
                    <NextLink
                        href="/artistas/slug"
                        passHref
                        legacyBehavior
                        prefetch={false}>
                        <Link>
                            <Typography
                                variant="body1"
                                color="initial"
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}>
                                {artista.interprete}
                            </Typography>
                        </Link>
                    </NextLink>
                </CardContent>

                <Box textAlign={"center"}>
                    <Box
                        sx={{
                            mb: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <FavoriteBorderOutlined
                            fontSize="small"
                            sx={{ pr: "3px", color: "GrayText" }}
                        />
                        {artista.seguidores} Me gusta
                    </Box>

                    <Button
                        variant="contained"
                        sx={{ mb: 2, paddingX: 3 }}
                        color="error"
                        startIcon={<FavoriteBorderOutlined />}>
                        {/* <FavoriteOutlined /> */}
                        Seguir
                    </Button>
                </Box>
            </Card>
        </Grid>
    );
}
