// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// const [decrement, spanRef, increment] =
//   document.querySelector("#counter").children;
// console.log(decrement, spanRef, increment);
// const counter = {
//   increment() {
//     refs.valueEl.textContent = +refs.valueEl.textContent + 1;
//     // refs.valueEl.textContent = this.value;
//   },
//   decrement() {
//     refs.valueEl.textContent -= 1;

//     // refs.valueEl.textContent = this.value;
//   },
// };

// const refs = {
//   counterEl: document.querySelector("#counter"),
//   decrementBtn: document.querySelector('button[data-action="decrement"]'),
//   incrementBtn: document.querySelector('button[data-action="increment"]'),
//   valueEl: document.querySelector("#value"),
// };

// refs.incrementBtn.addEventListener("click", () => {
//   counter.increment();
// });
// refs.decrementBtn.addEventListener("click", counter.decrement.bind(counter));

// const inputRef = document.querySelector("#validation-input");

// inputRef.addEventListener("blur", onBlurInput);

// function onBlurInput({ target: { value, dataset } }) {
//   value.length === parseInt(dataset.length)
//     ? toggleClass("valid", "invalid")
//     : toggleClass("invalid", "valid");
// }

// function toggleClass(add, remove) {
//   inputRef.classList.add(add);
//   inputRef.classList.remove(remove);
// }
// function getRandomIntegerFromInterval(min, max) {
//   return Math.floor(Math.random(*(max-min+1)+min))
// }
