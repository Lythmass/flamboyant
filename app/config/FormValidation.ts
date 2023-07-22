export const FormValidation = {
  firstName: {
    required: 'Please do not leave this field empty',
    minLength: {
      value: 2,
      message: 'Please enter at least 2 characters',
    },
  },
  email: {
    required: 'Please do not leave this field empty',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address',
    },
  },
  subject: {
    required: 'Please do not leave this field empty',
    minLength: {
      value: 4,
      message: 'Please enter at least 4 characters',
    },
  },
  message: {
    required: 'Please do not leave this field empty',
    minLength: {
      value: 5,
      message: 'Please enter at least 5 characters',
    },
  },
};
