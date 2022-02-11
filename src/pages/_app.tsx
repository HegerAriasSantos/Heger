import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';

import { Toaster } from 'react-hot-toast';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { LanguageContext, ProjectsContext } from '../contexts';

function MyApp({ Component, pageProps }) {
  return (
    <ProjectsContext.Provider>
      <LanguageContext.Provider>
        <ThemeProvider theme={theme}>
          <NextNprogress
            color={theme.primary}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow
          />
          <Toaster position="bottom-right" />
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </LanguageContext.Provider>
    </ProjectsContext.Provider>
  );
}

export default MyApp;
