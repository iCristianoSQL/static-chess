# Xadrez da Raro

O projeto consiste em um jogo de xadrez estático desenvolvido em HTML5 e CSS3, sem o uso de tecnologias externas e sem a manipulação do DOM pelo JavaScript. Isso significa que todo o jogo é construído utilizando apenas as linguagens de marcação e estilo padrão da web, sem a necessidade de bibliotecas ou frameworks adicionais. O jogo é estruturado em uma única página HTML, com as peças do tabuleiro sendo desenhadas utilizando somente CSS. Não há interatividade com o usuário, uma vez que não há manipulação do DOM pelo JavaScript, tornando o jogo estático.

## Imagem da aplicação

![App Screenshot](https://i.ibb.co/zn5BXg2/image.png)

## Abordagem

![MIT License](https://img.shields.io/badge/-HTML5-red)

O projeto utiliza diversas funcionalidades do HTML5 para melhorar a legibilidade do código e a otimização para mecanismos de busca (SEO) da aplicação. Foram escolhidas tags semânticas para uma melhor organização do conteúdo, como por exemplo, a tag "dialog" para mostrar caixas de diálogo. As casas do tabuleiro do xadrez foram separadas e cada uma recebeu sua própria tag para possibilitar uma futura dinamicidade da aplicação. Além disso, as classes e identificadores utilizados no projeto seguem a arquitetura kebab-case, que é um padrão adotado pela comunidade de desenvolvimento web.

Também é importante destacar que o projeto utiliza o padrão de codificação UTF-8, que permite a exibição correta de caracteres especiais e acentuação. Além disso, para melhorar a estética e a legibilidade do jogo, foram importadas fontes externas diretamente na header do HTML, possibilitando uma personalização maior do estilo do texto e dos elementos visuais do jogo.

![MIT License](https://img.shields.io/badge/-CSS3-blue)

No CSS3, o projeto utiliza resets globais para garantir uma consistência visual e evitar a escrita excessiva de CSS. O reset global é definido em um arquivo separado de estilo e inclui estilos para inputs, tags de texto e outros elementos. Além disso, a responsividade da fonte do projeto é baseada em "rem", que se ajusta automaticamente de acordo com o tamanho da tela, e o estilo "-webkit-font-smoothing: antialiased;" é utilizado para remover serrilhamentos.

Dentro do projeto, a organização dos elementos no tabuleiro é feita com a ferramenta "display: flex", que permite uma estruturação mais intuitiva e flexível do layout. Também foram utilizados efeitos "hover" e "keyframes" para melhorar a perspectiva do usuário durante o jogo. Para estilizar os elementos, foram utilizadas classes genéricas, que permitem uma estilização em bloco para múltiplos elementos sem a necessidade de definir classes específicas.

![MIT License](https://img.shields.io/badge/-JS-yellow)

No JS eu abordei o uso de const para declarar variáveis ajuda a evitar a reatribuição acidental de valores. A seleção eficiente de elementos da DOM utilizando os métodos "querySelector" para uma boa prática de programação. O uso de funções para encapsular tarefas específicas torna o código mais legível e organizado.

Além disso, o código implementa validação de entrada do usuário para garantir que o jogo só processe entradas válidas e fornece feedback claro para o usuário em caso de erro. O armazenamento local do navegador é utilizado para persistir dados de usuário.

Outra qualidade importante do código é o uso do textContent em vez do innerHTML para definir o conteúdo de elementos da DOM. O textContent é mais seguro e rápido, pois trata o conteúdo como texto simples, sem executar scripts potencialmente maliciosos que podem estar incluídos no conteúdo da string. O innerHTML, por outro lado, é vulnerável a ataques de injeção de código (como cross-site scripting) e pode ser mais lento, pois precisa analisar e executar o código HTML incluído no conteúdo da string. Portanto, o uso do textContent é uma boa prática recomendada ao trabalhar com conteúdo de elementos da DOM em JavaScript.

## Autor

- [Cristiano](https://www.github.com/iCristianoSQL)
