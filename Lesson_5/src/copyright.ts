const year = document.getElementById('year') as HTMLSpanElement
const thisYear : string = new Date().getFullYear().toString()
year.setAttribute("dateTime", thisYear) 
year.textContent = thisYear