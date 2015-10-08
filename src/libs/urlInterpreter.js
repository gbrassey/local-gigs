function _getParameterByName(name) {
  const pName = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&#]' + pName + '=([^&#]*)');
  const results = regex.exec(location.search) || regex.exec(location.hash);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function compileAccess() {
  return {
    accessToken: _getParameterByName('access_token'),
    tokenType: _getParameterByName('token_type'),
    expiresIn: _getParameterByName('expires_in'),
  };
}

export default { compileAccess: compileAccess };
