import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavBar } from './NavBar/NavBar';
import UserRoutes from './UserRoutes';
import { store, persistor } from '../redux/store';
import AuthLayOut from './AuthLayout/AuthLayOut';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayOut>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <NavBar />
            <UserRoutes />
          </BrowserRouter>
        </AuthLayOut>
      </PersistGate>
    </Provider>
  );
};
