import React from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const user = 'pi';
    const con = '1234';

    if (username === user && password === con) {
      onLogin();
    } else {
      setError('¡Incorrecto, vuelve a intentarlo :(');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuario:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <br />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br />
      {error && <p>{error}</p>}
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;
