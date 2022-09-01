let names = ["John", "Makar", "SuetaLoh", "Vlad","John", "Makar", "SuetaLoh", "Vlad"]

function likes(names) {
  let answer;
    names.length == 0 ? answer = "no one likes this" : 
    names.length == 1 ? answer = `${names[0]} likes this`: 
    names.length == 2 ? answer = `${names[0]} and ${names[1]} like this`:
    names.length == 3 ? answer = `${names[0]}, ${names[1]} and ${names[2]} like this` :  answer = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    return answer
  }

  console.log(likes(names))