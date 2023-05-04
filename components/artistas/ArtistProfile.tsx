import { IArtist } from '@/interfaces';
import { ContactPageOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, List, Paper, Typography } from '@mui/material';
import { FC } from 'react';


interface Props {
	artista: IArtist;
}

export const ArtistProfile: FC<Props> = ({artista}) => {

	const tipos = artista.tipo.map((tipo) => (
        <li key={tipo}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)} </li>
    ));

	return (
        <Paper
            elevation={4}
            sx={{
                paddingY: 3,
                paddingX: 4,
                display: { xs: "block", sm: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
            }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Avatar
                    alt={artista.interprete}
                    src={`/img/artistas/${artista.imgPortada}`}
                    sx={{
                        width: 150,
                        height: 150,
                        border: "2px solid #DE260E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: "block",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Typography
                    variant="h1"
                    component="h1"
                    color="initial"
                    sx={{
                        textAlign: 'center'
                     }}>
                    {artista.interprete}
                </Typography>
                <List sx={{ textAlign: "center" }}>
                    {/* <ListItem> */}
                    {tipos}
                    {/* </ListItem> */}
                </List>
                <Box
                    sx={{
                        my: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "GrayText",
                    }}>
                    <FavoriteBorderOutlined
                        fontSize="small"
                        sx={{ pr: "3px", color: "GrayText" }}
                    />
                    {artista.seguidores} Seguidores
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                    variant="contained"
                    sx={{ mb: 2, paddingX: 3 }}
                    color="primary"
                    startIcon={<ContactPageOutlined />}>
                    {/* <FavoriteOutlined /> */}
                    Biografia
                </Button>
                <Button
                    variant="contained"
                    sx={{ mb: 1, paddingX: 3 }}
                    color="error"
                    startIcon={<FavoriteBorderOutlined />}>
                    {/* <FavoriteOutlined /> */}
                    Seguir
                </Button>
            </Box>
        </Paper>
    );
}
