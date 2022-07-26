
const NumberOnly = (value:string) => {
    if (value) {
        return value.replace(/[^\d]/g, "");
    } else {
        return value
    }
};
const ReanderField = ({
  input,
  label,
  type,
  readOnly,
  placeholder,
  id,
  tabIndex,
  ref,
  customeCss,
  minLength,
  maxLength,
  uppercase,
  textColor = "text-black",
  formGroup,
  iconFormGroup,
  meta: { touched, error, warning }
}:any) => (
  <div className="form-group">
    {label &&
    <label htmlFor="" className={textColor}>
      {label || <> &nbsp; </>}
    </label>
    }
    <div className="input-group">
      <input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault(); //<===== This stops the form from being submitted
          } else {
          }
        }}
        {...input}
        tabIndex={tabIndex}
        ref={ref}
        autoComplete="off"
        type={type}
        id={id}
        style={{ textTransform: uppercase ? "uppercase" : "none" }}
        className={
          `form-control ${touched && error && "is-invalid "} ${customeCss || ""} `
        }
        readOnly={readOnly}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {formGroup && (
        <div className="input-group-append">
          <div className="input-group-text">
            <span className={iconFormGroup}></span>
          </div>
        </div>
      )}
      {touched &&
        ((error && <span className="error invalid-feedback">{error}.</span>) ||
          (warning && <p>{warning}</p>))}
    </div>
  </div>
);
  

export {
  ReanderField,
  NumberOnly
}