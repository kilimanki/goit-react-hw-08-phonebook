import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const Pages = lazy(() => import('pages/Pages/Pages'));
const PublicRoute = lazy(() => import('./PublicRoute/PublicRoute'));
const PrivateRoute = lazy(() => import('./PrivateRoute/PrivateRoute'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
