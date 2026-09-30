const API_URL = "https://springboot-rest-2575.onrender.com/";
/*const API_URL = "http://localhost:8080/";*/

const statusElement = document.querySelector("#status");
const testarButton = document.querySelector("#testar-api");

async function testarAPI() {
    statusElement.textContent = "Conectando à API...";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.text();

        statusElement.textContent = data;

        console.log("Resposta da API:", data);

    } catch (error) {
        console.error("Erro ao conectar com a API:", error);

        statusElement.textContent =
            "Não foi possível conectar com a API.";
    }
}

testarButton.addEventListener("click", testarAPI);

testarAPI();

