function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Exibe uma mensagem de erro caso o campo esteja vazio
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de alguma modalidade</p>";
      return;
    }
  
    // Inicializa a variável para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Converte os campos do dado para minúsculas para facilitar a comparação
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo pesquisado existe no título, descrição ou tags
      if (titulo.includes(campoPesquisa) 
        || descricao.includes(campoPesquisa)
     || tags.includes(campoPesquisa)) {
        // Cria um elemento HTML para exibir o resultado da pesquisa
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
   
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }