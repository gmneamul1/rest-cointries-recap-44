const loadCountries = () => {
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))

}
const displayCountries = countries => {

    const countriesHTML = countries.map(country =>  getCountyHTML(country) )
// console.log(countriesHTML)
const container = document.getElementById('countries');
container.innerHTML = countriesHTML.join('')
}
// const getCountyHTML = country => {
//     // option 1 
//     const {name, flegs} = country
//     return`
//     <div class="country"> 
//     <h2>${name.common} </h2>
//     <img src="${country.flags.png}" alt="">
//     </div>

//     `
// }

const getCountyHTML = ({name, flags, area,region}) => {
    // option 1 
    // const {name, flags} = country
    return`
    <div class="country"> 
    <h2>${name.common} </h2>
    <p>Area : ${area} </p>
    <p>Continet : ${region} </p>
    <img src="${flags.png}" alt="">
    </div>

    `
}


loadCountries()