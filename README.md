# App cicloEstudos

## Índice

- Descrição do Projeto
- Resultado
- Observações e Melhorias futuras
- Referências

-----------------
## Descrição do Projeto 
O app consiste em um registro de atividade para utilização do método de estudo por ciclos. O objetivo foi criar um modelo de app que funcionasse de forma simples e que proporcionasse ao usuário uma fácil utilização para registro da disciplina atual que estava estudando.
O projeto foi feito utilizando React-Native e simulações com o Android Studio. O funcionamento do app é super simples, bastando o usuário apenas tocar na tela sobre o ciclo de estudos que a seleção da disciplina estudada vai mudando. Caso o usuário queira retornar à atividade anterior pode tocar no botão "Return" e tocar mais uma vez na tela. O botão "Return" só funciona para voltar apenas uma disciplina no ciclo, então mesmo que o usuário clique várias vezes sobre o botão o ciclo só retornará uma disciplina.

-----------------
## Resultado

A imagem abaixo contém o link do vídeo que mostra o resultado do app.
  [<img src="https://user-images.githubusercontent.com/95441484/172374548-a2018f11-ee2f-4019-be71-a9775d193a9a.jpg" width="533" height="960">](https://drive.google.com/file/d/1dcnehCKT2y9xntCPH660-QObfeNHtMhz/view?usp=sharing)

-----------------
## Observações e Melhorias Futuras

- Como o app não permite edição durante o seu uso, não é possível trocar as disciplinas exceto na criação de um novo apk. Mas essa parte poderia ser adicionada ao código em uma nova versão do app onde o usuário poderia modificar as disciplinas e adicionar novas e retirar totalmente alguma que existe.

- Um outro ponto a se destacar é que se o usuário fechar o app totalmente, ou seja, fechar ele até em segundo plano, o app para de registrar a disciplina atual e reinicia o ciclo para a primeira utilização. Isso poderia ser resolvido adicionando um arquivo para registro do índice que representa a disciplina que o usuário estava estudando. Assim, ao abrir novamente o app ele iria verificar qual o último estado salvo, retornando ao usuário a sua última atividade.

- Outros pontos interessantes poderiam ser adicionados em outras atualizações como um registro de tempo de atividade que o usuário utilizou em cada disciplina. Ou até mesmo alerta em forma de alarme para avisar ao usuário que ele atingiu o tempo pré-determinado por ele para aquela atividade e no caso deveria ir para a próxima.

-----------------
# Referências

- https://github.com/luizgmartins/flashlightDT
- https://www.estudaqui.com/blog/concursos/como-montar-ciclo-estudo/
- https://voceconcursado.com.br/blog/ciclo-de-estudos-para-concursos-o-guia-ilustrado-passo-a-passo/
- https://reactnative.dev/docs/getting-started 
