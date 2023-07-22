export const FormValidation = {
  firstName: {
    required: 'Do not leave this empty',
    minLength: {
      value: 2,
      message: 'Enter at least 2 characters',
    },
  },
  email: {
    required: ' Do not leave this empty',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Enter a valid email address',
    },
  },
  subject: {
    required: 'Do not leave this empty',
    minLength: {
      value: 4,
      message: 'Enter at least 4 characters',
    },
  },
  message: {
    required: 'Do not leave this empty',
    minLength: {
      value: 5,
      message: 'Enter at least 5 characters',
    },
  },
};
