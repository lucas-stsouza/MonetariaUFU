const WHATSAPP_NUMBER = "5534996980050";

/* ---------------- TEMA (claro/escuro) ---------------- */
(function initTheme(){
  const saved = localStorage.getItem("monetaria-theme") || "dark";
  applyTheme(saved);
  const toggle = document.getElementById("themeToggle");
  if(toggle){
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      applyTheme(current === "light" ? "dark" : "light");
    });
  }
  function applyTheme(theme){
    if(theme === "light"){
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("monetaria-theme", theme);
    const btn = document.getElementById("themeToggle");
    if(btn) btn.textContent = theme === "light" ? "☀️" : "🌙";
  }
})();

/* ---------------- MODALIDADES ---------------- */
const A_CONFIRMAR = "A confirmar — chama no WhatsApp";

const modalidades = [
  { nome: "Peteca", icon: "🏸",
    resumo: "Esporte genuinamente brasileiro que exige reflexo, coordenação e trabalho em equipe. Diversão garantida e uma das paixões da Monetária nas competições. Atuais vice-campeões da CIA! Treinadores: Pão e Lucas.",
    treinoM: "Seg e Qua • 19h", treinoF: "Ter e Qui • 18h – 20h" },
  { nome: "Natação", icon: "🏊", resumo: "Provas de piscina em diferentes estilos e distâncias. Ideal para quem busca resistência, técnica e condicionamento físico completo." },
  { nome: "Judô", icon: "🥋", resumo: "Arte marcial de origem japonesa focada em quedas, imobilizações e disciplina. Não é necessário experiência prévia para começar." },
  { nome: "Jiu-Jitsu", icon: "🥋", resumo: "Luta de solo com foco em técnica e estratégia. Um dos esportes que mais cresce nas atléticas universitárias do Brasil." },
  { nome: "Atletismo", icon: "🏃", resumo: "Corridas, saltos e arremessos. A modalidade mais tradicional dos Jogos Universitários, com provas para todos os perfis." },
  { nome: "Xadrez", icon: "♟️", resumo: "Estratégia pura sobre o tabuleiro. Competições de raciocínio lógico que também valem pontos nos jogos universitários." },
  { nome: "Tênis de Mesa", icon: "🏓", resumo: "Ping pong competitivo, de reflexo rápido e muita estratégia de jogo. Treinos leves e super concorridos." },
  { nome: "Tênis de Campo", icon: "🎾", resumo: "Tênis tradicional de quadra, simples ou duplas. Ótima modalidade pra quem já joga ou quer aprender do zero." },
  { nome: "Futsal", icon: "🥅", resumo: "Futebol de quadra, dinâmico e intenso. Uma das modalidades mais disputadas e com maior torcida da Monetária." },
  { nome: "Futebol de Campo", icon: "⚽", resumo: "O futebol tradicional em campo society ou grande. Times cheios de raça representando a atlética nos jogos." },
  { nome: "Handebol", icon: "🤾", resumo: "Esporte de quadra que mistura contato, velocidade e trabalho em equipe. Treinos animados e times bem unidos." },
  { nome: "Vôlei", icon: "🏐", resumo: "Vôlei de quadra, um dos carros-chefe da Monetária, com treinos frequentes e forte presença nas competições." },
  { nome: "FIFA", icon: "🎮", resumo: "O e-sport da Monetária. Campeonatos de FIFA disputadíssimos, tanto online quanto presenciais, representando a atlética nos jogos universitários." },
];
modalidades.forEach(m => {
  if(!m.treinoM) m.treinoM = A_CONFIRMAR;
  if(!m.treinoF) m.treinoF = A_CONFIRMAR;
});

const grid = document.getElementById("modalidadesGrid");
if(grid){
  modalidades.forEach(m => {
    const card = document.createElement("div");
    card.className = "modalidade-card";
    card.innerHTML = `
      <div class="modalidade-icon">${m.icon}</div>
      <h3>${m.nome}</h3>
      <div class="modalidade-genero">
        <span class="g-m">&#9794; Masculino</span>
        <span class="g-sep">&bull;</span>
        <span class="g-f">&#9792; Feminino</span>
      </div>
      <span class="ver-treinos">Ver treinos &rarr;</span>`;
    card.addEventListener("click", () => openModalidade(m));
    grid.appendChild(card);
  });
}

const modalOverlay = document.getElementById("modalOverlay");
function openModalidade(m){
  document.getElementById("modalIcon").textContent = m.icon;
  document.getElementById("modalTitle").textContent = m.nome;
  document.getElementById("modalResumo").textContent = m.resumo;
  document.getElementById("modalTreinoM").textContent = m.treinoM;
  document.getElementById("modalTreinoF").textContent = m.treinoF;
  const texto = encodeURIComponent(`Olá! Tenho interesse na modalidade de ${m.nome} da Monetária 🔵🔴`);
  document.getElementById("modalWhatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`;
  openOverlay(modalOverlay);
}

/* ---------------- GESTÃO ---------------- */
const diretorias = [
  { nome: "Presidência", icon: "👑", desc: "Direção geral da atlética e representação institucional junto à universidade, parceiros e outras atléticas." },
  { nome: "Administrativo", icon: "📋", desc: "Organização interna da gestão: reuniões, documentos, processos e o funcionamento do dia a dia da atlética." },
  { nome: "Esportivo", icon: "🏅", desc: "Coordenação de todas as modalidades, treinos, atletas e a participação da Monetária nas competições." },
  { nome: "Eventos", icon: "🎉", desc: "Organização das festas, bailes e ações que agitam a atlética durante o ano todo." },
  { nome: "Financeiro", icon: "💰", desc: "Gestão de mensalidades de sócios, patrocínios, orçamentos e todo o caixa da atlética." },
  { nome: "Marketing", icon: "📣", desc: "Redes sociais, identidade visual, criação de conteúdo e divulgação de tudo que a Monetária faz." },
  { nome: "Patrimônio", icon: "📦", desc: "Cuidado com os materiais, uniformes, equipamentos e todo o patrimônio da atlética." },
  { nome: "Produtos", icon: "👕", desc: "Criação e venda dos produtos da Monetária: camisas, moletons, uniformes e coleções." },
  { nome: "Social", icon: "🤝", desc: "Integração da galera, ações sociais e o relacionamento da atlética com sócios e a comunidade acadêmica." },
];

const diretoriasGrid = document.getElementById("diretoriasGrid");
if(diretoriasGrid){
  diretorias.forEach(d => {
    const card = document.createElement("div");
    card.className = "diretoria-card";
    card.innerHTML = `
      <div class="diretoria-icon">${d.icon}</div>
      <h4>${d.nome}</h4>
      <p>${d.desc}</p>
      <span class="ver-foto">📸 Ver a diretoria</span>`;
    card.addEventListener("click", () => openGestao(d));
    diretoriasGrid.appendChild(card);
  });
}

const gestaoOverlay = document.getElementById("gestaoOverlay");
function openGestao(d){
  const foto = document.getElementById("gestaoFoto");
  // Placeholder: enquanto não houver foto real, mostra a logo circular.
  foto.src = d.foto || "imagens/logo-circular.png";
  foto.classList.toggle("is-placeholder", !d.foto);
  document.getElementById("gestaoFotoNote").textContent = d.foto
    ? "" : "📷 Foto ilustrativa — em breve a foto real da diretoria aqui.";
  document.getElementById("gestaoIcon").textContent = d.icon;
  document.getElementById("gestaoTitle").textContent = d.nome;
  document.getElementById("gestaoDesc").textContent = d.desc;
  openOverlay(gestaoOverlay);
}

/* ---------------- OVERLAYS (abrir/fechar) ---------------- */
function openOverlay(overlay){
  if(!overlay) return;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeOverlays(){
  document.querySelectorAll(".modal-overlay.active").forEach(o => o.classList.remove("active"));
  document.body.style.overflow = "";
}
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => { if(e.target === overlay) closeOverlays(); });
});
document.querySelectorAll("[data-close]").forEach(btn => btn.addEventListener("click", closeOverlays));
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeOverlays(); });

/* ---------------- IMAGEM DO PROCESSO SELETIVO ---------------- */
/* Mostra imagens/PS.png quando existir; senão, mantém o placeholder. */
(function initPS(){
  const img = document.getElementById("psImg");
  const placeholder = document.getElementById("psPlaceholder");
  if(!img || !placeholder) return;
  img.addEventListener("load", () => {
    img.hidden = false;
    placeholder.hidden = true;
  });
  img.addEventListener("error", () => {
    img.hidden = true;
    placeholder.hidden = false;
  });
})();

/* ---------------- NAV MOBILE ---------------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if(navToggle && navLinks){
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
}

/* ---------------- FORMULÁRIO DE CONTATO ---------------- */
const contatoForm = document.getElementById("contatoForm");
if(contatoForm){
  const formNote = document.getElementById("formNote");
  contatoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const texto = encodeURIComponent(
      `Contato via site - Monetária\n\nNome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
    if(formNote) formNote.textContent = "Abrindo o WhatsApp com sua mensagem preenchida...";
    contatoForm.reset();
  });
}
