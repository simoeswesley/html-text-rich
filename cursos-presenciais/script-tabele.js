function estilizarTabela() {
    const tabelas = document.querySelectorAll(".tabela-eventos");

    tabelas.forEach(tabela => {
        tabela.style.width = "100%";

        const ths = tabela.querySelectorAll("th");
        ths.forEach(th => {
            th.style.backgroundColor = "#00cb77";
            th.style.color = "#ffffff";
            th.style.padding = "8px";
        });

        const tds = tabela.querySelectorAll("td");
        tds.forEach(td => {
            td.style.padding = "8px";
        });

        const links = tabela.querySelectorAll("a, p");
        links.forEach(link => {
            if (/Saiba Mais/.test(link.textContent)) {
                link.style.color = "#1351b4";
                link.style.fontSize = "small";

            } 
            if (/Inscrições abertas/.test(link.textContent)) {
                link.style.color = "#00cb77";
                link.style.fontWeight = "bold";
                link.style.display = "block";
                link.style.padding = "10px";
                link.style.borderRadius = "25px";
                link.style.fontSize = "small";
                link.style.textAlign = "center";
                link.style.border = "2px solid #00cb77";
                link.style.backgroundColor="#00cb7724";
            } else if (/Inscrições encerradas/.test(link.textContent)) {
                link.style.color = "#ff0000";
                link.style.fontWeight = "bold";
                link.style.display = "block";
                link.style.padding = "10px";
                link.style.borderRadius = "25px";
                link.style.fontSize = "smaller";
                link.style.textAlign = "center";
            } else if (/Em breve/.test(link.textContent)) {
                link.style.color = "#ffaa00"; 
                link.style.fontWeight = "bold";
                link.style.display = "block";
                link.style.padding = "10px";
                link.style.borderRadius = "25px";
                link.style.fontSize = "small";
                link.style.textAlign = "center";
                link.style.border = "2px solid #ffaa00";
                link.style.backgroundColor="#ffaa0038";
            }
        });
    });
}
estilizarTabela();
