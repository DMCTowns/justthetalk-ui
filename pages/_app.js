// This file is part of the JUSTtheTalkUI distribution (https://github.com/jdudmesh/justthetalk-ui).
// Copyright (c) 2021 John Dudmesh.

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, version 3.

// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
// General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.
import Head from 'next/head'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { fetchUser } from '../redux/userActions'
import { LoadingState } from '../redux/constants'
import Maintenance from './maintenance'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'

import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const localTheme = createTheme({
  palette: {
    primary: {
      main: '#2A5880'
    },
    info: {
      main: '#2A5880'
    }
  },
  typography: {
    fontFamily: ['IBM Plex Sans Arabic', 'Verdana', 'Helvetica Neue', 'Arial', 'sans-serif'],
    overline: {
      textTransform: 'none',
      fontSize: '1rem',
      lineHeight: 2
    }
  }
})

function MyApp({ Component, pageProps }) {
  const state = store.getState()
  if (state.user.loadingState === LoadingState.Pending) {
    store.dispatch(fetchUser())
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={localTheme}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=yes"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-47267190-1"></script>
          <script
            async
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-47267190-1');
                    `
            }}
          />
        </Head>
        {/* <Maintenance {...pageProps} /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
