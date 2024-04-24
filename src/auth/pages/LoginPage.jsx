import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";


export const LoginPage = () => {
  
const navigate = useNavigate();
const { login } = useContext(AuthContext);

const onLogin = () => {
    
  const lastPath = localStorage.getItem('lastPath') || '/';

  login( 'Jesus Toussaintt' );
  
  navigate( lastPath, {
    replace: true
  });
}
  
  return (
    <div className="cotainer mt-5">
      <h1>Login</h1>
      <hr/>

      <button className="btn btn-secondary"
      onClick={onLogin}
      >Entrar</button>
    </div>
  )
}
