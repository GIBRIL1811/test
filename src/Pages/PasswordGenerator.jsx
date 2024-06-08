import React, { useState } from 'react';
import "../App.css";
function PasswordGenerator() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generatePassword = () => {
    console.log("Validating username:", username);

    if (!username) {
      console.log("Username harus diisi.");
      setErrorMessage('Username harus diisi.');
    } else if (!/^[a-zA-Z0-9~!$@%^&*#]+$/.test(username)) {   //Username hanya berisi alpha numerik (a-z,A-Z,0-9) dan simbol (~!$ @%^&*# )
      console.log("Username tidak valid.");
      setErrorMessage('Username hanya boleh berisi karakter alfanumerik dan beberapa simbol.');
    } else {
      console.log("Username valid:", username);
      const randomString = Math.random().toString(36).substring(7);
      const generatedPassword = `${username}_${randomString}`;
      setPassword(generatedPassword);
      setErrorMessage('');
    }
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={generatePassword}>Generate Password</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {password && <p className="password-result">Generated Password: {password}</p>}
    </div>
  );
}

export default PasswordGenerator;
