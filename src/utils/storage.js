export const setItem = (key, value) => {
  let success = false;
  let error;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    success = true;
  } catch (e) {
    error = e;
  }
  return [success, error];
};

export const getItem = (key) => {
  let value;
  try {
    value = JSON.parse(window.localStorage.getItem(key)) || null;
  } catch (e) {
  }
  return value;
};
