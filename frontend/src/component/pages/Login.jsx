import "./Login.css";
import { PiAddressBookFill } from "react-icons/pi";
export default function Login() {
  return (
    <div>
      <div className="text-center mt-40">
        <form>
          <h1>Login</h1>
          <div className="mt-10">
            <input type="text" placeholder="username" className="text-center" />
            <input
              type="text"
              placeholder="password"
              className=" text-center"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
