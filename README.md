# Treino de javascript com filter, forEach e sort

Neste mini projeto, você criará uma galeria de produtos em uma página web. Cada produto tem como base  dados provenientes de um arquivo data.js. Esse exercício é uma ótima oportunidade para melhorar suas habilidades com manipulação de DOM e eventos em JavaScript, além de praticar a criação de uma interface visual simples e interativa usando apenas HTML, CSS e JavaScript.

## 🤓 Antes de começar

Para começar o projeto, utilize a seguinte estrutura já do repositório:

`index.html`: Página principal do projeto.

`styles.css`: Estilização dos elementos.

`data.js`: Arquivo contendo os dados dos produtos (nome, preço, imagem e imagem de fundo).

E crie o seguinte arquivo:

`script.js`: Arquivo JavaScript para controlar a lógica de interação e manipulação das imagens.

## 🔨 Requisitos

## Requisito 1: Renderização de Produtos com Imagens
No arquivo `index.html`, implemente a renderização dos produtos utilizando a DOM e adicione as imagens com as propriedades definidas no arquivo `data.js`.A partir dos dados presentes no array de produtos em `data.js`. Para cada produto, insira uma tag `<img>` com a classe `product__image`, configurando o atributo src com o valor de srcImg de cada objeto no array.

  👀 Dicas:
Use o método forEach para iterar sobre os produtos.

## Requisito 2: Ordenação dos Produtos por Preço e Avaliação
Implemente a funcionalidade de ordenação dos produtos com base em três critérios: `menor preço`, `maior preço` e `avaliação`. O comportamento da ordenação deve alterar a ordem dos produtos exibidos na tela conforme o critério selecionado.

## Requisito 3: Filtro de Preço Máximo com Range
Crie um controle de filtro de preço máximo utilizando um input de tipo range. Os produtos cujo preço seja superior ao valor definido pelo range devem ser excluídos da exibição, mostrando apenas os produtos que atendem ao critério de preço.

## Requisito 4: Filtro de Produtos por Nome
Implemente um filtro de pesquisa para exibir apenas os produtos que correspondem ao nome digitado pelo usuário. A lista de produtos exibidos deve ser filtrada dinamicamente para mostrar apenas aqueles cujo nome contém o texto digitado pelo usuário. O filtro deve ser sensível a maiúsculas/minúsculas e ser aplicado assim que o usuário começar a digitar.

## Requisito 5: Menu Mobile Interativo
Adicione um menu responsivo que seja acessível em dispositivos móveis. O menu deve ser oculto por padrão e aparecer quando o usuário clicar em um ícone de menu (hamburger). O menu deve permitir navegar pelas opções da página e ser ocultado novamente ao clicar em uma opção ou no próprio ícone de menu.

## 🔨 Desafio extra para quem quer ir além

Requisito extra 1: Adicione uma animação suave para a transição das imagens ao passar o mouse sobre elas.

Requisito extra 2: Implemente um sistema de modal para exibir detalhes completos do produto ao clicar sobre a imagem. Mostre o nome, preço, descrição e outras informações no modal.

## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Entretanto, fique à vontade para montar a aplicação conforme a sua criatividade.

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1446265657290370041)

## 👉🏽 Sobre esse mini-projeto

### O que você irá praticar:

### JavaScript
- Manipulação do DOM com JavaScript
- Uso de eventos como mouseover e mouseout
- Interação dinâmica com os dados (exibição de imagens e informações)
- Uso de funções de manipulação de arrays (Filter, ForEach e Sort)

### CSS
- Estilização simples com CSS para criar um layout agradável e responsivo
- Animações e transições para melhorar a interação com o usuário

### Pré requisitos
- Conhecimento básico de HTML, CSS e JavaScript.
- Noções sobre como manipular elementos do DOM e adicionar eventos com JavaScript.
