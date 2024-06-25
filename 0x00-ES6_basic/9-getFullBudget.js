import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  return {
    income,
    gdp,
    capita,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `€${(income * 0.85).toFixed(2)}`,
  };
}
