import { useLoginMagicLinkForm } from "../../shared/hooks/forms/useLoginMagicLinkForm";
import DefaultButton from "../atoms/DefaultButton";
import EmailInputGroup from "../molecules/form/EmailInputGroup";
import LoadingSpinner from "../UI/LoadingSpinner";

const MagicLinkForm = () => {
  const { submitHandler, loading } = useLoginMagicLinkForm();

  return (
    <form onSubmit={submitHandler} className={"flex flex-col gap-2"}>
      <EmailInputGroup />
      <DefaultButton>
        {loading ? (
          <LoadingSpinner className="size-7 mx-auto" />
        ) : (
          <span>Send Magic Link</span>
        )}
      </DefaultButton>
    </form>
  );
};

export default MagicLinkForm;
