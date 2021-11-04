import { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faUser);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPassword = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };
  return (
    <div>
      <header>
        <h1>Create account</h1>
      </header>
      <div>
        {register === false ? (
          <form
            onSubmit={() => {
              password !== confirmPassword
                ? alert("Vos deux mots de passe ne sont pas identiques")
                : setRegister(true);
            }}
          >
            <div>
              <h2>Name</h2>
              <input
                onChange={handleName}
                type="text"
                placeholder="name"
                value={name}
              />
            </div>
            <div>
              <h2>Email</h2>
              <input
                onChange={handleEmail}
                type="text"
                placeholder="email"
                value={email}
              />
            </div>
            <div>
              <h2>Password</h2>
              <input
                onChange={handlePassword}
                type="password"
                placeholder="password"
                value={password}
              />
            </div>
            <div>
              <h2>Confirm your passeword</h2>
              <input
                onChange={handleConfirmPassword}
                type="password"
                placeholder="confirmPassword"
                value={confirmPassword}
              />
            </div>
            <div>
              <input className="submit" type="submit" value="Register" />
            </div>
          </form>
        ) : (
          <div>
            <h2>Results</h2>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
            <button
              onClick={() => {
                setRegister(false);
              }}
            >
              Edit your information
            </button>
          </div>
        )}
      </div>

      <footer>
        <p>
          Made with <span>Reacteur</span> at <span>Le Reacteur</span> by{" "}
          <span>Brice</span>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
