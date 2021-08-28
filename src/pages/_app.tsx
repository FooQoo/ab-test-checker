import 'src/styles/global.scss';
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { usePageView } from 'src/hooks/usePageView';
import { createStore } from 'src/re-ducks/createStore';

const App = (props: AppProps) => {
  usePageView();

  return (
    <Provider store={createStore()}>
      <props.Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
