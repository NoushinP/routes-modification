const formatMyDate = (date) => {
  return dayjs(date).format('DD/MM/YYYY HH:MM:SSSS') 
}

module.exports = formatMyDate