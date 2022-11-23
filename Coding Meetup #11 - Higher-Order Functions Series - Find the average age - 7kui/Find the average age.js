var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 20, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 21, language: 'Python' },
  ];

  function getAverageAge(list) {
    let age = [];
    let sum = 0;
    let average = 0;
    for (people of list) {
        age.push(people.age);
    }
    let length = age.length;
    for (meaning of age) {
        sum = sum + meaning;
    }
    return Math.ceil(average = sum / length);
}

console.log(Math.round(20.6))
  console.log(getAverageAge(list1))