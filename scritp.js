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
    return document.body.innerHTML += `
        <p> Vaše hrubá měsíční mzda = ${Math.round(wage*hours*days)} Kč </p>
    `
}
salary(150,8,20)

const taxed = (amount, tax) => {
    return document.body.innerHTML += `
    <p> Vaše čistá měsíční mzda = ${Math.round(amount*(1-(tax/100)))} Kč </p>
`
}
taxed(24000,15)
