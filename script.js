const isLeapYear = () => {
  const checkYear = Number(prompt(`Please enter the year you want to check`));
  if (isNaN(checkYear)) {
    alert("Invalid input. Try again.");
    return;
  }
  (checkYear % 4 === 0 && checkYear % 100 !== 0) || checkYear % 400 === 0
    ? alert(`${checkYear} is a leap year`)
    : alert(`${checkYear} is NOT a leap year`);
};

let condition = false;

do {
  isLeapYear();
  condition = confirm("would you like to check another year?");
} while (condition);
