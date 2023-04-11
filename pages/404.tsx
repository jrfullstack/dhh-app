import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MainLayout } from "../components/layouts";

const Custom404 = () => {
    return (
        <MainLayout
            title="Pagina no encontrada"
            pageDescription="Solicitud erronea">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="calc(100vh - 200px)"
                sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    fontSize={80}
                    fontWeight={200}>
                    404 |
                </Typography>
                <Typography marginLeft={2}>La pagina solicitada no existe</Typography>
            </Box>
        </MainLayout>
    );
};

export default Custom404;
