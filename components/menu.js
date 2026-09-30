document.getElementById("menu").innerHTML = `
      <div class="logo">
        Bem-Vindo
      </div>
      <div class="menu">
        <a href="/index.html">Início</a>
        <a href="/sobre.html">Sobre</a>

        <div class="dropdown">
            <a href="#">Projetos <span class="arrow">▾</span></a>

            <div class="dropdown-menu">
                <a href="/projetos/api1.html">Projeto 1</a>
                <a href="#">Projeto 2</a>
                <a href="#">Projeto 3</a>
            </div>
        </div>

        <a href="#">Contato</a>
      </div>
`;
