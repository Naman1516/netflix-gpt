import React from "react";

const FormInput = ({ type, additionalClasses }) => {
  return <input className={`${additionalClasses}`} type={type} />;
};

export default FormInput;
