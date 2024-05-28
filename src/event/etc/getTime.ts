export const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}/${month}/${day}`;
};

export const getTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${hour}:${minute}:${second}`;
};
