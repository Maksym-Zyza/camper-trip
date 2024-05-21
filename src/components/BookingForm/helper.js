export const validateForm = data => {
  const newErrors = {};

  const namePattern =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const commentPattern = /^[a-zA-Z0-9\s.,!?']*$/;

  if (!data.name) {
    newErrors.name = 'Name is required';
  } else if (!namePattern.test(data.name)) {
    newErrors.name = 'Name is invalid';
  }

  if (!data.email) {
    newErrors.email = 'Email is required';
  } else if (!emailPattern.test(data.email)) {
    newErrors.email = 'Email is invalid';
  }

  if (!data.date) {
    newErrors.date = 'Date is required';
  }

  if (!data.comment) {
    newErrors.comment = 'Comment is required';
  } else if (!commentPattern.test(data.comment)) {
    newErrors.comment = 'Comment is invalid';
  }

  return newErrors;
};
