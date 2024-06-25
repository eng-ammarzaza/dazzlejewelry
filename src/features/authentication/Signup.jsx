import SignupFeatures from "../../ui/SignupFeatures";
import SignupForm from "./SignupForm";
function Signup() {
  return (
    <div className="flex md:flex-row flex-col items-center gap-0">
      <div>
        <SignupForm />
      </div>
      <SignupFeatures />
    </div>
  );
}

export default Signup;
