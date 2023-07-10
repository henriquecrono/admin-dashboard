import { Outlet } from 'react-router-dom';

import ResponsiveDrawer from '../Drawer';

export function AuthenticatedLayout() {
	return (
		<>
			<ResponsiveDrawer>
				<Outlet />
			</ResponsiveDrawer>
		</>
	);
}
