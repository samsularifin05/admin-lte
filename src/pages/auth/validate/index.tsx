import { FormErrors } from "redux-form";

interface ValidateInterface {
    user_id : string,
    password : string
}
const Validate = (value: ValidateInterface): FormErrors<ValidateInterface> => {
    const errors: FormErrors<ValidateInterface> = {}
    
    if (value.user_id === undefined) {
      errors.user_id = "User Id is tequired";
    }
    if (value.password === undefined) {
      errors.password = "Password is required";
    }
    return errors;
  };
  
  export default Validate;
  