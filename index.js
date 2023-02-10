const API_KEY = '48bd52b7bac4490795a207333c914bc0';
const symbols = ['GME', 'MSFT', 'DIS', 'BNTX'];

async function getStockPrices() {
  for (const symbol of symbols) {
    const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&apikey=${API_KEY}`);
    const data = await response.json();

    console.log(`Latest close price for ${symbol}: ${data.last.close}`);
  }
}

getStockPrices();



async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main()