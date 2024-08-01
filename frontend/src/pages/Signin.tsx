import Auth from "../components/Auth";
import Label from "../components/Label";

function Signin() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <Auth typelogin="Signin" />

      <Label />
    </div>
  );
}

export default Signin;
