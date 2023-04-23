import { FC, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeUpdater: FC<{}> = () => {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <Box                
                sx={{minHeight: '162.38px'}}
            >

            </Box>
        );

    return (
        <Button
            variant="contained"
            aria-label="Theme"
            sx={{ paddingLeft : "0px", paddingY: '7px' }}
            endIcon={
                resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
            } 
            onClick={() =>
                setTheme(resolvedTheme === "light" ? "dark" : "light")
            }>
            
        </Button>
    );
};

export default ThemeUpdater;
