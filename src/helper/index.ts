import moment from "moment"

export function formatCurrency(val: string | number): string {
  if (val !== undefined && val !== null) {
    return  val.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')
  } else {
    return '-'
  }
}

export function formatCurrens(num): string {
  if (String(num).length < 7) {
    return Math.floor(num/1000) + 'RB';
} else {
    return Math.floor(num/1000000) + 'Jt';
}
}


export function formatCurrencyVoucher(val: string | number): string {
  if (val !== undefined && val !== null) {
    return val.toString().replace(/(\d)(?=(\d\d\d))/g, '$1')
  } else {
    return '-'
  }
}

export function formatCurrencyKilo(val: string | number) {
  if (val !== undefined && val !== null) {
    const toString = val.toString()
    const formatted = formatCurrency(val)
    const splitted = formatted.split(",")

    switch (toString.length) {
      case 4:
        return `${splitted[0]}K`;
        break;
      case 5:
        return `${splitted[0]}K`;
        break;
      case 6:
        return `${splitted[0]}K`;
        break;
      case 7:
        return `${splitted[0]}M`;
        break;
      default:
        break;
    }
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
