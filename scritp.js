/* Výplata
Spočítejte si svoji měsíční výplatu pomocí funkcí.
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění. */
const salary = (wage, hours, days) => {
    return Math.round(wage * hours * days)
}
const input = {
    wage: Number(prompt("Zadejte hrubou mzdu v Kč za hodinu: ")),
    hours: Number(prompt("Zadejte kolik hodin průměrně denně pracujete:")),
    days: Number(prompt("Zadejte kolik dní v měsíci průměrně pracujete:")),
    amount: Number(prompt("Zadejte výši měsíční hrubé mzdy v Kč: ")),
    tax: Number(prompt("Zadejte procento zdanění:"))
}
const taxed = (amount, tax)=> {
    return Math.round(amount*(1-(tax/100)))    
}
document.body.innerHTML += `<p>Vaše hrubá měsíční mzda = ${salary(input.wage, input.hours, input.days)} Kč </p>`
document.body.innerHTML += `<p> Vaše čistá měsíční mzda = ${taxed(input.amount,input.tax)} Kč</p>`
