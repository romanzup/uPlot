import {
  ComponentsState,
  ErrorComponentsState,
} from 'piral';
import NotFound from './components/NotFound';
import ErrorInfo from './components/ErrorInfo';
import Container from './components/Container';
import Tile from './components/Tile';
import App from './components/App';
import Navigation, { MenuItem }  from './components/Navigation';
import Host from './components/Host';
import Toast from './components/Toast/Toast';

export const errors: Partial<ErrorComponentsState> = {
  not_found: NotFound,
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: ErrorInfo,
  DashboardContainer: Container,
  DashboardTile: Tile,
  Layout: App,
  MenuContainer: Navigation,
  MenuItem,
  NotificationsHost: Host,
  NotificationsToast: Toast,
};
