import { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
//styles
import './styles/normalize.scss';
import './styles/theme.scss';
import './styles/global.scss';
// pages
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import PageLayout from './components/PageLayout';
import { ThemeContextProvider } from './context/theme-context';

const App = () => {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    })
  );

  return (
    <QueryClientProvider client={queryClient.current} contextSharing>
      <ThemeContextProvider>
        <BrowserRouter>
          <PageLayout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/country/:cca2' element={<CountryDetail />} />
            </Routes>
          </PageLayout>
        </BrowserRouter>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};

export default App;
