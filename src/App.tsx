import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'
import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme';
import { routes } from './routes/routes';


function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          {
            routes.map(({Component,...rest}) => <Route key={rest.path} {...rest} element={<Component />} />)
          }
          {/* <Route path={RouteEnum.NEW_USERS} element={<NewUser />} />
          <Route path="user/:userId"  element={<UserDetail />} />
          <Route path={RouteEnum.HOME} element={<Users />} /> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
