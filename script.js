console.log('loaded')

const rootElement = document.querySelector("#root")
console.log(rootElement)

const countryComponent = (country) => `
    <div class="country">
        <h2>country name: ${country.name.common}</h2>
        <h3>country pop: ${country.population}</h3>
    </div>
`

async function init() { // felkészítjük a js-t, hogy a függvényben lesznek aszinkron kódok
    const response = await fetch("https://restcountries.com/v3.1/all") // megvárjuk a fetch válaszát (promise helyett)
    const data = await response.json() // megvárjuk, hogy a response megjöjjön (promise helyett) -> itt lesz elérhető az adatunk
    console.log(data)

    data.forEach(country => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))

}

init()


/* rootElement.innerHTML = `
    <h1>hello world</h1>
    <div>
        <p>lorem ipsum</p>
        <h2>subtitle</h2>
        <button>click me!</button>
    </div>
`

const array = ["kismacska", "kutyus", "zebra", "kecske"] */

/* const jsonLikeArray = [
    {
        countryName: "Hungary",
        population: 8900000
    },
    {
        countryName: "England",
        population: 18000000
    },
    {
        countryName: "USA",
        population: 230000000
    }
]

for (let i = 0; i < jsonLikeArray.length; i++) {
    rootElement.innerHTML += `
        <h3>name: ${jsonLikeArray[i].countryName}</h3>
        <h4>population: ${jsonLikeArray[i].population}</h4>
    `
} */

/*fetch("https://restcountries.com/v3.1/all") // elküldjük adatért a JS-t, visszatér valamikor adattal
    .then((res) => res.json()) // megjött az adat, de ki kell csomagolni, visszatér valamikor a kicsomagolt adattal
    .then((data) => { // megjött a kicsomagolt adat, innentől használhatjuk
        console.log(data)

        for (let i = 0; i <data.length; i++) {
            console.log(data[i].name.common)
            console.log(data[i].population)

            rootElement.innerHTML += `
                <h3>country name: ${data[i].name.common}</h3>
                <h4>country population: ${data[i].population}</h4>
            `
        }
    }) */