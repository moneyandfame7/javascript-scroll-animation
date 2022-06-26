//* выборка DOM элементов ( селекторы )
'use strict'
const header = document.querySelector('#header') // шапка
const navLinks = document.querySelectorAll('.nav__link') // навигация
const animItems = document.querySelectorAll('#anim-items') // секции

document.addEventListener('DOMContentLoaded', () => checkScroll()) // при загрузке
window.addEventListener('scroll', () => checkScroll()) // событие скролла

history.scrollRestoration = 'manual' // вверх экрана при перезагрузке страницы

const checkScroll = () => {
  const scrollPosition = window.scrollY
  if (scrollPosition !== 0) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

if (animItems.length > 0) {
  console.log('Проверка')
  window.addEventListener('scroll', animOnScroll)

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 4

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('active')
      } else {
        animItem.classList.remove('active')
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll()
  }, 400)
}

// let resultOne = '25' - 5
// console.log(resultOne)
// console.log(typeof resultOne)

// let resultTwo = 10 * '80'
// console.log(resultTwo)
// console.log(typeof resultTwo)

// let resultThree = +'50' + +'50'
// console.log(resultThree)
// console.log(typeof resultThree)

// console.log(50 == '50')
// console.log('50' - 50)

// const a = true
// const b = false

// console.log(a || b)
// console.log(b || a)
// console.log(b || b)
// console.log(a || a)

// const userName = ''
// const userNickname = 'moneyandfame7'

// const user = userName || userNickname || 'Anonymous'

// console.log(user)

// const a = +prompt('Первое число: ', 1)
// const b = +prompt('Первое число: ', 2)

// console.log(a + b)

// const answer = +prompt('Enter number')
// if (answer > 0) {
//   console.log(1)
// } else if (answer === 0) {
//   console.log(0)
// } else {
//   console.log(-1)
// }

// let result
// let a = 1
// let b = 5
// a + b < 4 ? (result = 'Мало') : (result = 'Много')

// console.log(result)

// let message
// let login = prompt('Ваша должность?')
// login == 'Сотрудник'
//   ? (message = 'Привет')
//   : login == 'Директор'
//   ? (message = 'Здравствуйте')
//   : login == ''
//   ? (message = 'Нет логина')
//   : (message = '')
// alert(message)

// let age = prompt('Введите возраст')

// if (!(age >= 14 && age <= 90)) {
//   console.log('Вне диапазона чисел 14-90 ВКЛЮЧИТЕЛЬНО')
// } else {
//   console.log('В диапазоне чисел 14-90')
// }

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '')

//     if (!input) break outer
//     // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
//   }
// }

// alert('Готово!')

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) continue
//   console.log(i)
// }

// let num
// do {
//   num = prompt('Введите число, больше 100')
// } while ((num < 100) & (num != null))

//? проверка на простое число
// const simpleNum = count => {
//   next: for (let i = 2; i <= count; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) continue next
//     }
//     console.log(i)
//   }
// }

// simpleNum(10)

// const x = +prompt('Введите число')

// switch (x) {
//   case 1:
//     console.log(`Вы ввели число ${x} и это первый кейс`)
//     break
//   case 2:
//     console.log(`Вы ввели число ${x} и это первый кейс`)
//     break
//   default:
//     console.log('Такого кейса нет!')
// }

//! ///////////////////////////////////////////

// let a = '1'
// let b = 0
// switch (+a) {
//   case b + 1:
//     console.log('Выполнится, т.к значением +a будет 1, что равно b+1')

//   case 1:
//     setTimeout(() => {
//       console.log('То же самое')
//     }, 5000)
//   default:
//     setTimeout(() => {
//       console.log(`DEFAULT: выполнится, ибо в прошлом кейсе нет break`)
//     }, 7000)
// }

//! ///////////////////////////////////////////

//? группировка case
// let a = 3
// switch (a) {
//   case 4:
//     console.log('Правильно!')

//   case 3:            //* выполнится кейс 3, и в нём кейс 5
//   case 5:
//     console.log('Неправильно!')
//     console.log('Может вам посетить урок математики?')
//   default:
//     console.log('Чё за бред')
// }

//! ///////////////////////////////////////////

// let num = prompt('Введите число')
// switch (num) {
//   case '0':
//   case '1':
//     console.log('Один или ноль')
//     break

//   case '2':
//     console.log('Два')
//     break

//   case 3:
//     console.log('Не выполнится, потому что тип  ', num, typeof num)
//     break

//   default:
//     console.log('потому что тип переменной num', typeof num)
//     console.log('Неизвестное значение')
// }

//! ///////////////////////////////////////////

// const browser = prompt('What browser are you using?').toLowerCase()

// if (browser === 'edge') {
//   console.log("You've got the Edge!")
// } else if (
//   browser === 'chrome' ||
//   browser === 'firefox' ||
//   browser === 'safari' ||
//   browser === 'opera'
// ) {
//   console.log('Okkay, we support these browsers too')
// } else {
//   console.log('We hope that this page looks ok!')
// }

//! ///////////////////////////////////////////

// const number = +prompt('Введите число между 0 и 3', '')
// switch (number) {
//   case 0:
//     console.log('Вы ввели число 0')
//     break
//   case 1:
//     console.log('Вы ввели число 1')
//     break
//   case 2:
//   case 3:
//     console.log('Вы ввели число 2, ну или 3!')
//     break
//   default:
//     console.log('Такого числа я не знаю...')
//     break
// }

//! ///////////////////////////////////////////

// const showMessage = (from, text) => {
//   from = '*' + from + '*'
//   alert(from + ': ' + text)
// }
// let from = 'Аня'
// showMessage(from, 'Привет')

// alert(from)

//! ///////////////////////////////////////////

// const showMessage = (from, text = 'текст не добавлен') => {
//   console.log(`${from}: ${text}`)
// }
// showMessage('Давид')

// function anotherFunction() {
//   return 'no-message'
// }
// function showMessage(from, text = anotherFunction()) {
//   console.log(`${from}: ${text}`)
// }

//! ///////////////////////////////////////////

// showMessage('Davyd')

// const sum = (a, b) => {
//   return a + b
// }
// const result = sum(5, 5)
// console.log(result)

//! ///////////////////////////////////////////

// const age = prompt('Сколько вам лет?', 18)

// function checkAge(age) {
//   if (age > 18) {
//     return true
//   } else {
//     return console.log('А родители разрешили?')
//   }
// }

// if (checkAge(age)) {
//   console.log('Доступ открыт')
// } else {
//   console.log('Доступ закрыт')
// }

// function showMovie() {
//   if (!checkAge(age)) {
//     return
//   } else {
//     console.log('Просмотр фильма')
//   }
// }
// showMovie()

//! ///////////////////////////////////////////

// function doNothing() {}
// console.log(doNothing())

// function doNothing2() {
//   return
// }
// console.log(doNothing2())

//! ///////////////////////////////////////////

// don't use this //
// return
// ( some + long + expression + or + whatever *f(a)+f(b))

//? use this ?//
// reutrn (some +
//   long +
//   expression + or + whatever
//    - f(a)
//   + f(b))

//! ///////////////////////////////////////////
//? показывает простое число
// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue

//     console.log(i) // простое
//   }
// }
//? проверка на простое
// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false
//   }
//   return true
// }

// showPrimes(10)

//! ///////////////////////////////////////////
//?тернарное ветлвение и оператор || или
// let age = prompt('Сколько лет?')

// function checkAge(age) {
//   return age > 18 ? true : confirm('Родители разрешили?')
// }
// console.log(checkAge(age))

// function checkAgeTwo(age) {
//   return age > 18 || confirm('Родители разрешили?')
// }
// console.log(checkAgeTwo(age))

//! ///////////////////////////////////////////
//? поиск меньшего числа
// function min(a, b) {
//   if (a > b) {
//     return b
//   } else {
//     return a
//   }
// }

// console.log(min(3, -1))

//! ///////////////////////////////////////////
//? Проверка на целое число и возведение в степень
// function pow(x, n) {
//   if (n >= 1 && Number.isInteger(n)) {
//     return x ** n
//   } else {
//     return 'Ошибка при вводе числа'
//   }
// }

// console.log(pow(3, 5.5))

//! ///////////////////////////////////////////
//? Function Declaration
// function sayHi() {
//   console.log('Hi')
// }
//? Function Expression
// const sayHi = function () {
//   console.log('Hi');
// }

//*DECLARATION
// function sayHi() {
//   console.log('Привет')
// }
// const func = sayHi
// func()
// sayHi()

//*EXPRESSION
// const sayHi = function () {
//   console.log('Hi')
// }
// const func = sayHi
// func()
// sayHi()

//? callback-function
// function ask(question, yes, no) {
//   if (confirm(question)) yes() //* если нажата Oк
//   else no() //* если нажата Отмена
// }
// function showOk() {
//   alert('Вы согласны.')
// }
// function showCancel() {
//   alert('Вы отменили выполнение.')
// }
// ask('Вы согласны?', showOk, showCancel)

// function ask(question, yes, no) {
//   if (confirm(question)) yes() //* если нажата Oк
//   else no() //* если нажата Отмена
// }
// ask(
//   'Вы согласны?',
//   function () {
//     alert('Вы согласились.')
//   },
//   function () {
//     alert('Вы отменили выполнение. ')
//   }
// )

//! ///////////////////////////////////////////////
//? стрелочная функция
// let func = (a, b) => console.log(a * b)
// func(5, 5)

// const age = prompt('Сколько вам лет?')
// const welcome = age < 18 ? () => alert('Привет') : () => alert('Здравствуйте!')
// welcome()

// let sum = (a, b) => {
//   return a + b
// }
// alert(sum(1, 2))

//! ///////////////////////////////////////////////

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились.'),
//   () => alert('Вы отказались.')
// )

//! ///////////////////////////////////////////////

// alert('После этого сообщения ждите ошибку')
// [1, 2].forEach(alert)
