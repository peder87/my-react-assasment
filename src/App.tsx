import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'
import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme';
import { Users } from './pages/users';
import { NewUser } from './pages/newUser';
import { UserDetail } from './pages/detail';

export enum RouteEnum {
  'HOME' = '/',
  'NEW_USERS' = 'newUser',
  'USER'= 'user'
}

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={RouteEnum.NEW_USERS} element={<NewUser />} />
          <Route path="user/:userId"  element={<UserDetail />} />
          <Route path={RouteEnum.HOME} element={<Users />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
