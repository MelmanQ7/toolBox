async function getUsdRate() {
    try {
        // Ми кажемо програмі: "Зачекай (await), поки банк відповість"
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json');
        const responseEUR = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?&json');
        
        // Тепер чекаємо, поки текст перетвориться на зрозумілий JS об'єкт
        const data = await response.json();
        const dataEUR = await responseEUR.json();
        
        // Дані прийшли у вигляді масиву, беремо перший елемент
        const rate = data[0].rate;
        // const day = data[0].exchangedate;
        
        console.log(`Курс долара сьогодні ${data[0].exchangedate}: ${rate} грн ${dataEUR.rate}`);
        console.log(data);
        console.log(dataEUR);
        return rate;
    } catch (error) {
        console.error("Ой! Щось пішло не так з API:\n", error);
    }
}

getUsdRate();
