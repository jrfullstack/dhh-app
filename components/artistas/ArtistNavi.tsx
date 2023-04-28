import { useState } from 'react';
import { AlbumOutlined, CollectionsOutlined, ContactPageOutlined, Diversity3Outlined, LyricsOutlined, MusicVideoOutlined, OndemandVideoOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';


export const ArtistNavi = () => {
    const [value, setValue] = useState(0);
    return (
        <Paper sx={{ paddingY: 3 }}>
            <BottomNavigation
                sx={{ backgroundColor: "transparent" }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction
                    label="Audios"
                    icon={<MusicVideoOutlined />}
                />
                <BottomNavigationAction
                    label="Albumes"
                    icon={<AlbumOutlined />}
                />
                <BottomNavigationAction
                    label="Videos"
                    icon={<OndemandVideoOutlined />}
                />
                <BottomNavigationAction
                    label="Liricas"
                    icon={<LyricsOutlined />}
                />
                <BottomNavigationAction
                    label="Galeria"
                    icon={<CollectionsOutlined />}
                />
                <BottomNavigationAction
                    label="Redes Sociales"
                    icon={<Diversity3Outlined />}
                />
                <BottomNavigationAction
                    label="Biografia"
                    icon={<ContactPageOutlined />}
                />
            </BottomNavigation>
        </Paper>
    );
}
