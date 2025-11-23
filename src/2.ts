type Currency = 'USD' | 'EUR' | 'UAH' ;

interface ConvertCurrencyProps {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrencyProps): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({amount: 1500, currency: 'EUR'})