import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	Collapse,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

interface Props {
	children: JSX.Element;
}

export default function ResponsiveDrawer({ children }: Props) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [openPokemonItems, setOpenPokemonItems] = useState(false);

	const navigate = useNavigate();

	const handleClickPokemonItems = () => {
		setOpenPokemonItems(!openPokemonItems);
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar style={{ paddingLeft: '16px' }}>
				<img width={44} height={44} alt="Icon" src="/assets/react.svg" />
			</Toolbar>

			<Divider />

			<List>
				<ListItemButton
					onClick={() => {
						navigate('/home');
						handleDrawerToggle();
					}}
					key={'home'}
				>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={'Home'} />
				</ListItemButton>

				<ListItemButton onClick={handleClickPokemonItems} key={'pokemon'}>
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary={'Pokémon'} />
					{openPokemonItems ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>

				<Collapse in={openPokemonItems} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton
							sx={{ pl: 4 }}
							onClick={() => {
								navigate('/pokemon');
								handleDrawerToggle();
							}}
							key={'pokemon-list'}
						>
							<ListItemIcon>
								<FormatListNumberedIcon />
							</ListItemIcon>
							<ListItemText primary={'List'} />
						</ListItemButton>

						<ListItemButton
							sx={{ pl: 4 }}
							onClick={() => {
								navigate('/pokemon/create');
								handleDrawerToggle();
							}}
							key={'pokemon-create'}
						>
							<ListItemIcon>
								<FiberNewIcon />
							</ListItemIcon>
							<ListItemText primary={'Create'} />
						</ListItemButton>
					</List>
				</Collapse>

				<ListItemButton
					onClick={() => {
						navigate('/login');
						handleDrawerToggle();
					}}
					key={'logout'}
				>
					<ListItemIcon>
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText primary={'Sair'} />
				</ListItemButton>
			</List>
		</div>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar style={{ background: '#272727' }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Admin Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
						disableScrollLock: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					width: '100%',
				}}
			>
				<Toolbar />

				{children}
			</Box>
		</Box>
	);
}
