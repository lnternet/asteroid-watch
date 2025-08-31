// Function creates date format accepted by API.
export const formatDateParts = (date: Date): string => {
  const year = date.getFullYear();
  const month = ("0" + `${date.getMonth()}`).slice(-2);
  const day = ("0" + `${date.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
};
