export const yyyyMmDdHhMmSs = (date) => {
  const year = `${date.getFullYear()}`;
  let month = `${date.getMonth() + 1}`;
  if (month.length === 1) {
    month = `0${month}`;
  }
  let day = `${date.getDate()}`;
  if (day.length === 1) {
    day = `0${day}`;
  }
  let hour = `${date.getHours()}`;
  if (hour.length === 1) {
    hour = `0${hour}`;
  }
  let minute = `${date.getMinutes()}`;
  if (minute.length === 1) {
    minute = `0${minute}`;
  }
  let second = `${date.getSeconds()}`;
  if (second.length === 1) {
    second = `0${second}`;
  }
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
