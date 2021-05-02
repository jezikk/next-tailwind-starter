import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import * as locales from 'locales';

import '../styles/tailwind.css';

function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = locales[locale].default;

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default App;
