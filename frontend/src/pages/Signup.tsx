import Label from "../components/Label";
import Auth from "../components/Auth";

function Signup() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <Auth typelogin="Signup" />

      <Label />
    </div>
  );
}

export default Signup;
