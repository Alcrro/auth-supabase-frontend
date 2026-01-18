import Label from "../../atoms/form/Label";
import Input from "../../atoms/form/Input";

const EmailInputGroup = () => {
  return (
    <div className="label_group flex flex-col gap-2">
      <Label description={"Email"} />
      <Input
        placeholder={"Add an email"}
        type="email"
        name={"email"}
        className={"bg-(--bgInput) border-(--borderInput) rounded-lg p-2"}
      />
    </div>
  );
};

export default EmailInputGroup;
