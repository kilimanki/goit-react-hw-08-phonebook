export const userEmail = ({ auth }) => auth.user.email;
export const userName = ({ auth }) => auth.user.name;
export const isUserLogin = ({ auth }) => auth.isLogin;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
