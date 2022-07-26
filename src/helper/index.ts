import moment from "moment"

export function formatCurrency(val: string | number): string {
  if (val !== undefined && val !== null) {
    return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  } else {
    return '-'
  }
}

export function handleNull(val: string): boolean {
  if (val == null || val == 'null') return false
  return true
}

export function handleNullToString(val: string): string {
  if (val == null || val == 'null') return '-'
  return val
}

export function isNumber(val: string | number): boolean {
  const pattern = /^\d+\.?\d*$/;
  return pattern.test(val.toString());
}

export function isEmailValid(val: string): boolean {
  // const pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;
  /* eslint-disable */
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(val);
}

export function formatDate(val, format) {
  if (val) {
    return moment(val).format(format)
  }
  return ""
}

export function convertEpochToDate(val) {
  console.log("convertEpochToDate", val)
  if (val) {
    const myDate = new Date(val*1000);
      return myDate
  }
  return 0
}

export function epochToDateTime(val) {
  if (val) {
    const convertedEpoch = convertEpochToDate(val)
    return formatDate(convertedEpoch, "MMM DD YYYY, HH:mm")
  }
  return ""
}
