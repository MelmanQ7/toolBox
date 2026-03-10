async function loadProjectInfo() {
    try {
        const response = await fetch('../package.json');
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error("Помилка завантаження конфігу:", error);
    }
}

function idn(){console.log(loadProjectInfo());}
idn();

