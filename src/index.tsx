import React from 'react'
import { render } from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { RecoilRoot } from 'recoil'
import { Provider } from 'react-redux'
import axios from 'axios'
import querystring from 'querystring'

import store from './redux/store'

import App from './App'

axios.defaults.baseURL = import.meta.env.SNOWPACK_PUBLIC_API_URL
axios.defaults.responseType = 'json'
axios.defaults.paramsSerializer = (params): string => querystring.stringify(params)

render(
  <React.StrictMode>
    <RecoilRoot>
      <HelmetProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </HelmetProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
