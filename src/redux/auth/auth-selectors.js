export const UserEmail = ({ auth }) => auth.user.email;
export const UserName = ({ auth }) => auth.user.name;
export const isUserLogin = ({ auth }) => auth.isLogin;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
