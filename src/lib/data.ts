export type Recipe = {
    id: string;
    title: string;
    description: string;
    image: string;
    prepTime: string
    cookTime: string
    servings: number
    ingredients: string[]
    instructions: string[]
    category: string
}


export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Pão de Queijo Mineiro Tradicional",
    description: "O verdadeiro pão de queijo mineiro: casquinha crocante por fora, puxa-puxa por dentro e com muito gosto de queijo curado.",
    image: "/receitas/pao-de-queijo.png",
    prepTime: "20 minutos",
    cookTime: "30 minutos",
    servings: 25,
    ingredients: [
      "500g de polvilho azedo",
      "1 xícara de leite",
      "1/2 xícara de água",
      "1/2 xícara de óleo",
      "3 ovos médios",
      "300g de queijo minas padrão ou canastra ralado",
      "1 colher de sopa de sal"
    ],
    instructions: [
      "Em uma panela, ferva o leite, a água, o óleo e o sal.",
      "Coloque o polvilho em uma tigela grande e despeje o líquido fervente para escaldar. Misture bem com uma colher e deixe esfriar um pouco.",
      "Quando a massa estiver morna, adicione os ovos um a um, misturando com as mãos.",
      "Adicione o queijo ralado e sove bem até a massa ficar homogênea e desgrudar das mãos (se necessário, unte as mãos com um pouco de óleo).",
      "Faça bolinhas, coloque em uma assadeira e asse em forno preaquecido a 180°C por cerca de 30 minutos ou até dourarem ligeiramente.",
      "Sirva quentinho com um café passado na hora!"
    ],
    category: "Café da Manhã"
  },
  {
    id: "2",
    title: "Feijão Tropeiro Completo",
    description: "A receita que alimentava os antigos tropeiros. Um prato robusto, cheio de sabor, perfeito acompanhado de uma couve fininha.",
    image: "/receitas/feijao-tropeiro.png",
    prepTime: "25 minutos",
    cookTime: "40 minutos",
    servings: 6,
    ingredients: [
      "500g de feijão carioca cozido al dente (sem o caldo)",
      "200g de bacon picado",
      "250g de linguiça calabresa ou de porco em rodelas",
      "1 xícara de farinha de mandioca torrada",
      "4 ovos",
      "1 cebola picada",
      "3 dentes de alho amassados",
      "1 maço de couve cortada bem fininha",
      "Sal, pimenta-biquinho e cheiro-verde a gosto"
    ],
    instructions: [
      "Em uma frigideira grande, frite o bacon e a linguiça na própria gordura até ficarem crocantes. Retire e reserve.",
      "Na mesma gordura que ficou na panela, quebre os ovos e mexa delicadamente para que fiquem em pedaços grandes. Retire e reserve.",
      "Adicione um pouquinho mais de gordura se necessário, refogue a cebola e o alho até dourarem.",
      "Coloque a couve picada e refogue rapidamente por apenas 1 minuto (para não murchar demais).",
      "Adicione o feijão cozido escorrido, o bacon, a linguiça e os ovos de volta à panela.",
      "Vá salpipcando a farinha de mandioca aos poucos, misturando com cuidado para o feijão não desmanchar.",
      "Acerte o sal, junte o cheiro-verde e decore com pimenta-biquinho antes de servir."
    ],
    category: "Prato Principal"
  },
  {
    id: "3",
    title: "Frango com Quiabo à Moda de Minas",
    description: "Um clássico absoluto dos almoços de domingo. O segredo está em refogar o quiabo direitinho para tirar toda a baba e selar bem o frango.",
    image: "/receitas/frango-quiabo.png",
    prepTime: "30 minutos",
    cookTime: "50 minutos",
    servings: 6,
    ingredients: [
      "1 frango inteiro cortado em pedaços",
      "500g de quiabo fresco",
      "1 cebola grande picadinha",
      "4 dentes de alho amassados",
      "2 colheres de sopa de óleo (ou banha de porco)",
      "1 colher de sopa de colorau (urucum)",
      "Sal e pimenta-do-reino a gosto",
      "Cheiro-verde picado a gosto"
    ],
    instructions: [
      "Tempere o frango com alho, sal e pimenta-do-reino. Deixe marinar por pelo menos 20 minutos.",
      "Lave e seque muito bem os quiabos. Corte-os em rodelas de cerca de 1cm.",
      "Em uma panela, aqueça uma colher de óleo e refogue o quiabo em fogo médio, mexendo de vez em quando, até que pare de babar. Retire o quiabo da panela e reserve.",
      "Na mesma panela, adicione o restante do óleo/banha e o colorau. Sele bem os pedaços de frango até dourarem.",
      "Adicione a cebola e refogue junto com o frango. Cubra com água morna até a metade do frango, tampe e deixe cozinhar até a carne ficar macia.",
      "Quando o caldo estiver apurado, adicione o quiabo reservado e cozinhe por mais 5 a 10 minutos sem mexer muito.",
      "Finalize com cheiro-verde e sirva com angu e arroz branco."
    ],
    category: "Prato Principal"
  }
]