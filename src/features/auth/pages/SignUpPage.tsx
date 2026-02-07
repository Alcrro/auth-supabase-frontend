import { Helmet } from "react-helmet-async";
import LoginLayout from "../../../components/organisms/LoginLayout";
import SignUpForm from "../../../components/organisms/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign up | Alcrro</title>
        <meta name="description" content={"Sign up account!"}></meta>
        <meta name="robots" content={"noindex,nofollow"}></meta>
      </Helmet>
      <LoginLayout description="Sign up">
        <div className="form">
          <SignUpForm />
        </div>
      </LoginLayout>
    </>
  );
};

export default SignUpPage;
