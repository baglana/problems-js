function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

module.exports = isEqual;

console.log(
  isEqual(
    {
      name: "Benny",
      phone: "3325558745",
      email: "benny@edabit.com",
    },
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    }
  )
); // false

console.log(
  isEqual(
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    },
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    }
  )
); // true