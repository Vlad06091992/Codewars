let RomanNumerals = {
    fromRoman: function (roman) {
        let romNum = Array.from(roman)

        const numerals = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }

        let total = 0;
        let currentValue;
        let nextValue;
        for (let i = 0; i < romNum.length; i++) {
            currentValue = numerals[romNum[i]]
            nextValue = numerals[romNum[i + 1]]
            if (nextValue > currentValue) {
                total = total - currentValue
            }
            else if (nextValue <= currentValue || nextValue === undefined) {
                total = total + currentValue
            }
        }
        return (total)
    },

    toRoman: function toRoman(ArabNum) {

        let out;
        let ost;
        let numArr = [{ 1: 'I' }, { 2: 'II' }, { 3: 'III' }, { 4: 'IV' }, { 5: 'V' }, { 6: 'VI' }, { 7: 'VII' }, { 8: 'VIII' }, { 9: 'IX' }, { 10: 'X' }, { 20: 'XX' }, { 30: 'XXX' }, { 40: 'XL' }, { 50: 'L' }, { 60: 'LX' }, { 70: 'LXX' }, { 80: 'LXXX' }, { 90: 'XC' }, { 100: 'C' }, { 200: 'CC' }, { 300: 'CCC' }, { 400: 'CD' }, { 500: 'D' }, { 600: 'DC' }, { 700: 'DCC' }, { 800: 'DCCC' }, { 900: 'CM' }, { 1000: 'M' }, { 2000: 'MM' }, { 3000: 'MMM' },]
        let res = numArr.filter(el => {
            for (let number in el) {
                if (number <= ArabNum) {
                    return el
                }
            }
        })
    
        let lastRes = res[res.length - 1]
        for (let val in lastRes) {
            out = lastRes[val]
            ost = ArabNum - val
            if (ost == 0) {
                return out
            } else {
                out = out + this.toRoman(ost)
                return out
            }
        }
        return out
    }
}

console.log(RomanNumerals.fromRoman('CCCLXVIII'))
console.log(RomanNumerals.toRoman(368))


// console.log(RomanNumerals.fromRoman('XXI'))

// const numerals = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
// }

// let numbers = {
// // 1:'I',

// }
// for (let key in numerals) {
//     numbers[(numerals[key])]=key
//     }

//     console.log(numbers)

/*нужно реализовать конвертер  из арабских в римские*/

// function toRoman(ArabNum) {

//     let out;
//     let ost;
//     let numArr = [{ 1: 'I' }, { 2: 'II' }, { 3: 'III' }, { 4: 'IV' }, { 5: 'V' }, { 6: 'VI' }, { 7: 'VII' }, { 8: 'VIII' }, { 9: 'IX' }, { 10: 'X' }, { 20: 'XX' }, { 30: 'XXX' }, { 40: 'XL' }, { 50: 'L' }, { 60: 'LX' }, { 70: 'LXX' }, { 80: 'LXXX' }, { 90: 'XC' }, { 100: 'C' }, { 200: 'CC' }, { 300: 'CCC' }, { 400: 'CD' }, { 500: 'D' }, { 600: 'DC' }, { 700: 'DCC' }, { 800: 'DCCC' }, { 900: 'CM' }, { 1000: 'M' }, { 2000: 'MM' }, { 3000: 'MMM' },]
//     let res = numArr.filter(el => {
//         for (let number in el) {
//             if (number <= ArabNum) {
//                 return el
//             }
//         }
//     })

//     let lastRes = res[res.length - 1]
//     for (let val in lastRes) {
//         out = lastRes[val]
//         ost = ArabNum - val
//         if (ost == 0) {
//             return out
//         } else {
//             out = out + convert(ost)
//             return out
//         }
//     }
//     return out
// }
// console.log(toRoman(344))



// let obj = { 1: 'I' }

// for (let number in obj) {
//     console.log(number, obj[number])
// }
// let numArr = [{'I':1},{'II':2},{'III':3},{'IV': 4},{'V': 5},{'VI':6},{'VII':7},{'VIII':8},{'IX':9},{'X':10},{'XX':20},{'XXX':30},{'XL':40},{'L':50},{'LX':60},{'LXX':70},{'LXXX':80},{'XC':90},{'C':100},{'CC':200},{'CCC':300},{'CD':400},{'D':500},{'DC':600},{'DCC':700},{'DCCC':800},{'CM':900},{'M':1000},{'MM':2000},{'MMM':3000}]
