import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import querystring from 'querystring'

import App from './App'

axios.defaults.baseURL = import.meta.env.SNOWPACK_PUBLIC_API_URL
axios.defaults.responseType = 'json'
axios.defaults.withCredentials = true
axios.defaults.paramsSerializer = (params): string => querystring.stringify(params)

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)