import {
    Box,
    Divider,
    Drawer,
    IconButton,
    Input,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material";
import {
    AccountCircleOutlined,
    AdminPanelSettings,
    CategoryOutlined,
    ConfirmationNumberOutlined,
    LoginOutlined,
    MusicVideoOutlined,
    OndemandVideoOutlined,
    PortraitOutlined,
    SearchOutlined,
    VpnKeyOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { UiContext } from "@/context";
import { useRouter } from "next/router";

export const SideMenu = () => {
    const router = useRouter();

    const {isMenuOpen, toggleSideMenu} = useContext(UiContext);

    const navigateTo = (url:string) => {
        toggleSideMenu();
        router.push(url);
    }
    return (
        <Drawer
            open={isMenuOpen}
            anchor="right"
            sx={{
                backdropFilter: "blur(4px)",
                transition: "all 0.5s ease-out",
            }}
            onClose={toggleSideMenu}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>
                <List>
                    <ListItem>
                        <Input
                            type="text"
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility">
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    <ListSubheader sx={{ display: { xs: "", sm: "none" } }}>
                        Usuario
                    </ListSubheader>

                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Perfil"} />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <ConfirmationNumberOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Mis Ordenes"} />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <VpnKeyOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Ingresar"} />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <LoginOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Salir"} />
                    </ListItemButton>

                    {/* Categorias */}
                    <Divider sx={{ display: { xs: "", sm: "none" } }} />
                    
                    <ListSubheader sx={{ display: { xs: "", sm: "none" } }}>
                        Categorias
                    </ListSubheader>

                    <ListItemButton
                        sx={{ display: { xs: "", sm: "none" } }}
                        onClick={() => navigateTo("/audios")}>
                        <ListItemIcon>
                            <MusicVideoOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Audios"} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{ display: { xs: "", sm: "none" } }}
                        onClick={() => navigateTo("/Videos")}>
                        <ListItemIcon>
                            <OndemandVideoOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Videos"} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{ display: { xs: "", sm: "none" } }}
                        onClick={() => navigateTo("/artistas")}>
                        <ListItemIcon>
                            <PortraitOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Artistas"} />
                    </ListItemButton>

                    {/* Admin */}
                    <Divider />
                    <ListSubheader>Administracion</ListSubheader>

                    <ListItemButton>
                        <ListItemIcon>
                            <CategoryOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Productos"} />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ConfirmationNumberOutlined />
                        </ListItemIcon>
                        <ListItemText primary={"Ordenes"} />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <AdminPanelSettings />
                        </ListItemIcon>
                        <ListItemText primary={"Usuarios"} />
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
    );
};
