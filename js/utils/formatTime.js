export default date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12; // eslint-disable-line
  hours = hours ? hours : 12; // eslint-disable-line
  minutes = minutes < 10 ? '0' + minutes : minutes; // eslint-disable-line
  const strTime = hours + ':' + minutes + ' ' + ampm; // eslint-disable-line
  return strTime;
};
