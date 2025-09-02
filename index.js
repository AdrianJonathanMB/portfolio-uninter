const navigators = document.querySelectorAll("[data-nav]");
const experience = document.querySelectorAll("[data-experience]");
const experienceTitle = document.querySelectorAll("[data-experience-title]");
const experienceContent = document.querySelector("[data-experience-content]");

const width = window.innerWidth;
let experienceState = 0;

const experienceText = [
  `Possuo experiência em desenvolvimento front-end com React e TypeScript, além de atuar no back-end com Node.js e no mobile com React Native. Minha trajetória também envolve suporte técnico em TI, configuração e manutenção de computadores e equipamentos de rede.`,
  `
  Medalhista na Olimpíada Brasileira de Matemática (OBMEP)
Reconhecimento nacional que reforça minha capacidade analítica, raciocínio lógico e dedicação em resolver problemas complexos.
`,
  `Como Auxiliar de Suporte de TI na NEOOH, uma empresa líder em mídia OOH, sou responsável por garantir a configuração e manutenção eficientes de equipamentos.`,
];

navigators.forEach((item, index) => {
  item.addEventListener("click", () => {
    document.documentElement.scrollLeft = index * width;
  });
});

experience.forEach((item, index) => {
    experienceContent.innerHTML = experienceText[0]
  item.addEventListener("click", () => {
    experienceContent.innerHTML = experienceText[index];
  });
});
