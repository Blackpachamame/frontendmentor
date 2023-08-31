export const GenerarAdvice = () => {
  return fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then((data) => data.slip)
    .catch((error) => alert(error))
}
