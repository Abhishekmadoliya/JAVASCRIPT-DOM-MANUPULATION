const btn = document.querySelector('#btn')

const amount = document.querySelector('#amount');
const to = document.querySelector('#to');
const from = document.querySelector('#from');







const base = "usd";
// const apiKey = "YOUR_API_KEY_HERE";  // Replace with your actual API key
const ratesUrl = `https://api.fxratesapi.com/latest?base=${base}`;

async function getRates() {
    try {
        // Fetch data from the API
        let response = await fetch(ratesUrl);
        
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Convert the response to JSON
        let data = await response.json();
        
        // Log the entire data object
        console.log(data);
        
        // Access and log the base property
        console.log(data.rates.INR);
        
    } catch (err) {
        // Log any errors that occur during the fetch or JSON parsing
        console.error(err);
    }
}

getRates();
