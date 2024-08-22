

export const updateObject = (oldData, updatedData) => {
    return {
        ...oldData,
        ...updatedData
    }
}
export   const checkValidation = (value, rules, matched) => {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/;
      isValid =
        pattern.test(value) && value.length >= rules.minLength && isValid;
    //   setConfirmPass(value);
    }

    if (rules.isConfirmPassword) {
      isValid = value === matched && isValid;
    }

    if (rules.isEmail) {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    // if (rules.maxLength) {
    //   isValid = value.length <= rules.maxLength  && isValid;
    // }

    if (rules.isChecked) {
      isValid = rules.checked && isValid;
    }
    if (rules.isFile) {
      isValid = value && isValid;
    }

    if (rules.isContact) {
      
      isValid = value.length > 10 && isValid;
    }

    return isValid;
  };