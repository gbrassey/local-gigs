import React from 'react';
import './index.scss';

const SPOTIFY_CLIENT_ID = '1e0ad7166e5c4440848c13c4218eaeb3';
const SPOTIFY_SCOPES = [
  'playlist-read-private',
  'user-library-read',
  'playlist-read-collaborative',
].join(' ');
const SPOTIFY_LOGIN_URL = ``
  + `https://accounts.spotify.com/authorize?`
  + `client_id=${SPOTIFY_CLIENT_ID}`
  + `&response_type=token`
  + `&redirect_uri=${encodeURIComponent('http://localhost:8080/spotify-login-callback/')}`
  + `&scope=${SPOTIFY_SCOPES}`;

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <hr />
        <a href={SPOTIFY_LOGIN_URL}
          className="btn btn-primary"
          role="button"
          target="_blank">Login with Spotify</a>
      </div>
    );
  }
}
