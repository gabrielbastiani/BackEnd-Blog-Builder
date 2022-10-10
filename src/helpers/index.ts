export const dateToString = (date: string, withTime = false) => {
    const time = date;
    if (withTime) {
      return time.substring(0, 19);
    }
    return time.substring(0, 10);
  };
  