import '../styles/globals.css'
import BaseLayout from "../Layout/BaseLayout";
import {Provider} from "react-redux";
import store from "../store";


function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
      <BaseLayout>
          <Component {...pageProps} />
      </BaseLayout>
  </Provider>
}

export default MyApp
