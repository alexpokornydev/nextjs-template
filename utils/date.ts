export function convertDate(date:string | number){
  return new Date(date).toLocaleString("cs-CZ",{
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
    timeZone: "Europe/Prague"
  });
}