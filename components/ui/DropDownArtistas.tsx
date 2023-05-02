
import { useState } from "react";
import NextLink from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import { useRouter } from "next/router";
import { Button, Link, MenuItem } from "@mui/material";
import {
    AccountCircleOutlined,
    AdjustOutlined,
    InterpreterModeOutlined,
    MicNoneOutlined,
    NotificationsNoneOutlined,
    SportsMartialArtsOutlined,
    TuneOutlined,
    VrpanoOutlined,
} from "@mui/icons-material";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export const DropDownArtistas = () => {
    const { asPath } = useRouter();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button
                size="medium"
                id="tipo-artistas"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                color={
                    asPath === "/artistas" ||
                    asPath === "/artistas/category/mcs" ||
                    asPath === "/artistas/category/breakdancer" ||
                    asPath === "/artistas/category/deejay" ||
                    asPath === "/artistas/category/grafiteros" ||
                    asPath === "/artistas/category/mcsinternacionales" ||
                    asPath === "/artistas/category/productores"
                        ? "primary"
                        : "info"
                }
                onClick={handleClick}
                // onMouseLeave={handleClose}
                endIcon={<KeyboardArrowDownIcon />}>
                Artistas
            </Button>
            <StyledMenu
                id="tipo-artistas"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <NextLink href="/artistas/category/mcs" passHref legacyBehavior>
                    <MenuItem onClick={handleClose} disableRipple>
                        <MicNoneOutlined />
                        <Link>MC`s</Link>
                    </MenuItem>
                </NextLink>
                <NextLink
                    href="/artistas/category/deejay"
                    passHref
                    legacyBehavior>
                    <MenuItem onClick={handleClose} disableRipple>
                        <AdjustOutlined />
                        <Link>Deejay`s</Link>
                    </MenuItem>
                </NextLink>
                {/* <Divider sx={{ my: 0.5 }} /> */}
                <NextLink
                    href="/artistas/category/grafiteros"
                    passHref
                    legacyBehavior>
                    <MenuItem onClick={handleClose} disableRipple>
                        <VrpanoOutlined />
                        <Link>Grafiteros</Link>
                    </MenuItem>
                </NextLink>
                <NextLink
                    href="/artistas/category/breakdancer"
                    passHref
                    legacyBehavior>
                    <MenuItem onClick={handleClose} disableRipple>
                        <SportsMartialArtsOutlined />
                        <Link>Break Dancer`s</Link>
                    </MenuItem>
                </NextLink>
                <NextLink
                    href="/artistas/category/productores"
                    passHref
                    legacyBehavior>
                    <MenuItem onClick={handleClose} disableRipple>
                        <TuneOutlined />
                        <Link>Productores</Link>
                    </MenuItem>
                </NextLink>
                <NextLink
                    href="/artistas/category/mcsinternacionales"
                    passHref
                    legacyBehavior>
                    <MenuItem onClick={handleClose} disableRipple>
                        <InterpreterModeOutlined />
                        <Link>Colaboradores Int.</Link>
                    </MenuItem>
                </NextLink>
            </StyledMenu>
        </>
    );
}
