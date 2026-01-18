import Label from "../../atoms/form/Label";
import Input from "../../atoms/form/Input";

const PasswordInputGroup = () => {
  return (
    <div className="label_group flex flex-col gap-2">
      <Label description={"Password"} />
      <Input
        placeholder={"Add a password"}
        type="password"
        name={"password"}
        className={"bg-(--bgInput) border-(--borderInput) rounded-lg p-2"}
      />
    </div>
  );
};

export default PasswordInputGroup;
