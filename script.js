console.log('loaded')

const rootElement = document.querySelector("#root")
console.log(rootElement)

const fetchUrl = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const countryComponent = (country) => `
    <div class="country">
        <h2>country name: ${country.name.common}</h2>
        <h3>country pop: ${country.population}</h3>
    </div>
`

async function init() { 
    const data = await fetchUrl("https://restcountries.com/v3.1/all")
    
    data.forEach(country => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))

    /*const countryElement = document.querySelector("div.country")
    console.log(countryElement)
    countryElement.addEventListener("click", () => {
        countryElement.classList.toggle("clicked")
    })*/

    const countryElements = document.querySelectorAll("div.country")
    countryElements.forEach((countryElement) => {
        countryElement.addEventListener("click", () => {
            countryElement.classList.toggle("clicked")
        })
    })
}

init()