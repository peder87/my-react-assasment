import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'
import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style/globalStyle';
import { Toaster } from 'react-hot-toast'
import { theme } from './style/theme';
import { routes } from './routes/routes';
import { ProtectedRoutes } from './routes/protectedRoute';
import { NotFound } from './pages/404';


function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Toaster position='top-center'/>
      <ThemeProvider theme={theme}>
        <Routes>
          {
            routes.map(({Component,...rest}) => rest.private ? 
              <Route 
                key={rest.path} 
                element={
                  <ProtectedRoutes>
                    <Component />
                  </ProtectedRoutes>
                  }
                {...rest} 
              /> 
              : 
              <Route key={rest.path} {...rest} element={<Component />} />)
          }
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
