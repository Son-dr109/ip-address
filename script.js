api = 'https://freeipapi.com/api/json'
var ip = document.getElementById('ip')
var city = document.getElementById('city')
var country = document.getElementById('country')
function getIp() {
    fetch(api).then(res => res.json().then(result => {
        ip.innerHTML = 'IP: '+result.ipAddress
        city.innerHTML = 'City: '+result.cityName
        country.innerHTML = 'Country: '+result.countryName
        console.log(result)
    }))
}
// function getIp() {
//     fetch(api).then(res => res.json().then(result => {
//         console.log(result)
//     }))
// }