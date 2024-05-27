import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import { ListItemButton, ListItemIcon, ListItemText, Menu } from "@mui/material";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import CssBaseline from "@mui/material/CssBaseline";
import InfoIcon from "@mui/icons-material/Info";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TimelineIcon from "@mui/icons-material/Timeline";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Home, LocalHospital, People } from "@mui/icons-material";
import logo from "../../../assets/img/logo1.png";
function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function ResponsiveAppBar(props) {
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    className="navbar1"
                    style={{
                        width: "100%", // Extender de extremo a extremo
                        border: "2px solid white",
                        borderRadius: "0", // Eliminar lo circular de los extremos
                        background:
                            "linear-gradient( 90deg, rgba(78, 78, 246, 0.647) 0%, rgba(247, 90, 216, 0.696) 100% );",
                    }}
                >
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                            className="cursorp"
                        >
                            <img
                                src={logo}
                                alt="Logo"
                                style={{ marginRight: "1rem", height: "40px" }}
                            />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            {" "}
                            <Avatar sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}></Avatar>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {isMatch ? (
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                            ) : (
                                <>
                                    <Tabs centered sx={{ margin: "auto" }}>
                                        <Tab
                                            value="one"
                                            label={
                                                <p style={{ color: "white" }}>
                                                    <Home style={{ color: "white" }} /> Inicio
                                                </p>
                                            }
                                            onClick={() => {
                                                window.location.href = "/";
                                            }}
                                            style={{
                                                textDecoration: "none",
                                            }}
                                            className="Tab1 animate__animated animate__zoomIn"
                                        />

                                        <Tab
                                            label={
                                                <Link
                                                    href="/about"
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "white",
                                                        opacity: "1",
                                                    }}
                                                >
                                                    <p style={{ color: "white" }}>
                                                        {" "}
                                                        <InfoIcon style={{ color: "white" }} /> NOSOTROS
                                                    </p>
                                                </Link>
                                            }
                                            className="Tab2 animate__animated animate__zoomIn"
                                        >
                                            {" "}
                                        </Tab>


                                        <Tab
                                            value="three"
                                            label={
                                                <p>
                                                    <Link
                                                        href="/skills"
                                                        style={{
                                                            textDecoration: "none",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {" "}
                                                        <ManageAccountsIcon /> ESPECIALIDADES
                                                    </Link>
                                                </p>
                                            }
                                            className="Tab3 animate__animated animate__zoomIn"
                                        />

                                        <Tab
                                            value="three"
                                            label={
                                                <p>
                                                    <Link
                                                        href="/projects"
                                                        style={{
                                                            textDecoration: "none",
                                                            color: "white",
                                                        }}
                                                    >
                                                        <TimelineIcon /> CAMPANAS
                                                    </Link>
                                                </p>
                                            }
                                            className="Tab3 animate__animated animate__zoomIn"
                                        />

                                        <Tab
                                            value="three"
                                            label={
                                                <p>
                                                    <Link
                                                        href="/prebuilt-pages/modal-login"
                                                        style={{
                                                            textDecoration: "none",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {" "}
                                                        <LocalHospital /> MÉDICOS
                                                    </Link>
                                                </p>
                                            }
                                            className="Tab5 animate__animated animate__zoomIn"
                                        />
                                        <Tab
                                            value="three"
                                            label={
                                                <p>
                                                    <Link
                                                        href="/dashboard/client-management"
                                                        style={{
                                                            textDecoration: "none",
                                                            color: "white",
                                                        }}
                                                    >
                                                        <People /> PACIENTES
                                                    </Link>
                                                </p>
                                            }
                                            className="Tab6 animate__animated animate__zoomIn"
                                        />

                                        <Tab
                                            value="three"
                                            label={
                                                <p>
                                                    <Link
                                                        href="/contact"
                                                        style={{
                                                            textDecoration: "none",
                                                            color: "white",
                                                        }}
                                                    >
                                                        <ContactMailIcon /> CONTACTO
                                                    </Link>
                                                </p>
                                            }
                                            className="Tab6 animate__animated animate__zoomIn"
                                        />

                                        <Tab
                                            value="three"
                                            label={
                                                <p>
                                                    <Link
                                                        href="/contact"
                                                        style={{
                                                            textDecoration: "none",
                                                            color: "white",
                                                        }}
                                                    >
                                                        <People /> LOGIN
                                                    </Link>
                                                </p>
                                            }
                                            className="Tab6 animate__animated animate__zoomIn"
                                        />
                                    </Tabs>
                                </>
                            )}
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <Link href="/about">
                        <ListItemText primary="Nosotros" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ManageAccountsIcon />
                    </ListItemIcon>
                    <Link href="/skills">
                        <ListItemText primary="Especialidades" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <TimelineIcon />
                    </ListItemIcon>
                    <Link href="/projects">
                        <ListItemText primary="Campañas" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <LocalHospital />
                    </ListItemIcon>
                    <Link href="/prebuilt-pages/modal-login">
                        <ListItemText primary="Médicos" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <Link href="/dashboard/client-management">
                        <ListItemText primary="Pacientes" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ContactMailIcon />
                    </ListItemIcon>
                    <Link href="/contact">
                        <ListItemText primary="Contacto" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AddReactionIcon />
                    </ListItemIcon>
                    <Link href="/prebuilt-pages/modal-login">
                        <ListItemText primary="Citas" />
                    </Link>
                </ListItemButton>
            </Menu>
        </React.Fragment>
    );
}

export default function Nav() {
    return (
        <Box sx={{ flexGrow: 1, backgroundImage: `url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV9zaW1wbGVfM2RfaWxsdXN0cmF0aW9uX29mX2FfcmVjb3Zlcnlfcm9vbV93aV80ZjhkNDIwNC02N2I4LTQwMDQtYTBlNy05YjljMjIyMzE2ZGVfMS5qcGc.jpg')`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <ResponsiveAppBar />

        </Box>
    );
}

