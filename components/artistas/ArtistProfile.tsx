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
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}>
			<Box>
				<Avatar
					alt={artista.interprete}
					src={`/img/artistas/${artista.imgPortada}`}
					sx={{
						width: 150,
						height: 150,
						border: "2px solid #DE260E",
					}}
				/>
			</Box>
			<Box>
				<Typography variant="h1" component="h1" color="initial">
					{artista.interprete}
				</Typography>
				<List sx={{ textAlign: "center" }}>
					{/* <ListItem> */}
					{tipos}
					{/* </ListItem> */}
				</List>
				<Box
					sx={{
						mt: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "GrayText",
					}}>
					<FavoriteBorderOutlined fontSize="small" sx={{ pr: "3px" }} />
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
					sx={{ mb: 2, paddingX: 3 }}
					color="error"
					startIcon={<FavoriteBorderOutlined />}>
					{/* <FavoriteOutlined /> */}
					Seguir
				</Button>
			</Box>
		</Paper>
	);
}
