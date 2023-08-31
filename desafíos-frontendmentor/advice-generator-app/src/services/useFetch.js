export const GenerarAdvice = () => {
  return fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((error) => console.log(error))
}
// https://api.adviceslip.com/advice
