import React from 'react';
import './index.scss';

import { SPOTIFY_CLIENT_ID, SPOTIFY_AUTH_URL } from '../../constants/SpotifyConstants';

const SPOTIFY_SCOPES = [
  'playlist-read-private',
  'user-library-read',
  'playlist-read-collaborative',
].join(' ');
const SPOTIFY_LOGIN_URL = ``
  + SPOTIFY_AUTH_URL
  + `client_id=${SPOTIFY_CLIENT_ID}`
  + `&response_type=token`
  + `&redirect_uri=${encodeURIComponent('http://localhost:8080/')}`
  + `&scope=${SPOTIFY_SCOPES}`;

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <hr />
        <a href={SPOTIFY_LOGIN_URL}
          className="btn btn-primary"
          role="button">Login with Spotify</a>
      </div>
    );
  }
}
