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
    resumo: "A peteca reúne pessoas de todos os níveis, desde quem nunca jogou até quem quer representar a Monetária nas quadras.",
    conquistas: [["🥈", "Atual Vice-Campeão Masculino — CIA"]],
    equipe: [["Treinador", "Carlos Muzzi"], ["Coordenador", "Lucas"]],
    horarios: ["Sexta • 20h", "Sábado • 11h"] },

  { nome: "Judô", icon: "🥋",
    resumo: "No judô, ninguém precisa chegar sabendo. Aqui a gente aprende junto, evolui junto e cria laços que vão muito além do tatame. A disciplina transforma esforço em evolução.",
    conquistas: [["🥇", "Atual Campeão Feminino — Olimpíada UFU"], ["🥈", "Atual Vice-Campeão Masculino — Olimpíada UFU"]],
    equipe: [["Sensei", "Pablo"], ["Coordenadora", "Mafê"]],
    horarios: ["Quinta • 21h", "Sábado • 16h"],
    obs: "Treinos alternados semanalmente." },

  { nome: "Handebol", icon: "🤾",
    resumo: "O handebol é para quem gosta de jogo intenso, resenha no G8 depois do jogo e uma equipe que joga junto dentro e fora da quadra. Se você quer fazer parte disso, seu lugar é aqui.",
    conquistas: [["🥈", "Atual Vice-Campeão Masculino — Olimpíada UFU"], ["🥉", "Atual Terceiro Lugar Feminino — CIA e Olimpíadas UFU"]],
    equipe: [["Treinador", "Schubert"], ["Coordenador", "Luiz"]],
    horarios: ["Masculino • Domingo 11h", "Feminino • Domingo 10h"] },

  { nome: "Basquete", icon: "🏀",
    resumo: "No basquete você encontra uma equipe que joga unida, evolui a cada treino e faz qualquer novo integrante se sentir parte do time desde o primeiro dia.",
    conquistas: [["🥉", "Atual Terceiro Lugar Feminino — CIA"]],
    equipe: [["Treinador", "Bruno"], ["Coordenador", "Lorenzo"]],
    horarios: ["Masculino • Sábado 13h", "Feminino • Sábado 15h"] },

  { nome: "Atletismo", icon: "🏃",
    resumo: "No atletismo não importa se você já compete ou quer começar agora. Seja na pista ou na rua, aqui você tem uma equipe pronta para treinar e evoluir.",
    conquistas: [["🥇", "Atual Campeão Masculino — Olimpíadas UFU"], ["🥉", "Atual Terceiro Feminino — Olimpíadas UFU"]],
    equipe: [["Treinador", "Du"], ["Coordenador", "Naoki"]],
    horarios: ["Quarta • 20h", "Sábado • 10h"] },

  { nome: "Natação", icon: "🏊",
    resumo: "Nunca nadou? Não importa. Aqui você aprende no seu ritmo, evolui a cada treino e faz parte de uma família dentro e fora da piscina.",
    conquistas: [["🥉", "Atual Terceiro Lugar Feminino — Olimpíadas UFU"]],
    equipe: [["Treinadora", "Tiene"], ["Coordenador", "Luiz"]],
    horarios: ["Terça • 21h", "Sábado • 10h"] },

  { nome: "Jiu-Jitsu", icon: "🥋",
    resumo: "O respeito vem antes da força. Aqui você encontra uma equipe que acolhe, ensina e incentiva cada integrante a evoluir no seu próprio ritmo.",
    conquistas: [["🥉", "Atual Terceiro Lugar Feminino — CIA"]],
    equipe: [["Sensei", "João Marchini"], ["Coordenadora", "Mafê"]],
    horarios: ["Quinta • 21h", "Sábado • 15h"],
    obs: "Treinos alternados semanalmente." },

  { nome: "Xadrez", icon: "♟️",
    resumo: "Se você já joga xadrez e tem vontade de representar a Monetária nas competições universitárias, entre em contato com a gente. Estamos em busca de novos enxadristas para fortalecer nosso time.",
    equipe: [["Coordenador", "Lucas"]] },

  { nome: "Tênis de Mesa", icon: "🏓",
    resumo: "Se você tem reflexos rápidos, ou simplesmente vontade de aprender, o tênis de mesa da Monetária é o lugar certo. Venha treinar, evoluir e fazer parte da nossa família.",
    conquistas: [["🥈", "Atual Vice-Campeão Feminino — Olimpíadas UFU"]],
    equipe: [["Coordenador", "Lucas"]],
    horarios: ["Quarta • 19h"] },

  { nome: "Tênis de Campo", icon: "🎾",
    resumo: "Não importa se você nunca pegou em uma raquete ou já joga há anos. O importante é ter vontade de aprender, evoluir e fazer parte da nossa família.",
    conquistas: [["🥈", "Atual Vice-Campeão — Olimpíadas UFU"]],
    equipe: [["Coordenador", "Naoki"]] },

  { nome: "Futsal", icon: "🥅",
    resumo: "No futsal, teu escudo é minha honra e o meu amor. Nós jogamos por quem está ao nosso lado e por todos que cantam na arquibancada.",
    equipe: [["Técnico", "Raphael"], ["Coordenador", "Gordo"]],
    horarios: ["Masculino • Quarta 21h", "Masculino • Sábado 11h", "Feminino • Sábado 14h", "Feminino • Domingo 10h"] },

  { nome: "Futebol de Campo", icon: "⚽",
    resumo: "Sozinho ninguém vence um jogo. Aqui cada passe começa com a confiança no companheiro e termina com uma equipe comemorando junta.",
    generos: ["m"],
    equipe: [["Coordenador", "Gordo"]] },

  { nome: "Vôlei", icon: "🏐",
    resumo: "O vôlei é mais do que treinos e jogos. É um time que cresce junto, se apoia dentro de quadra e transforma cada treino em uma oportunidade de evoluir e fazer novas amizades.",
    conquistas: [["🥈", "Atual Vice-Campeão Masculino — Olimpíadas UFU"]],
    equipe: [["Treinador", "Sérgio"], ["Coordenador", "Lorenzo"]],
    horarios: ["Masculino • Quinta 21h", "Masculino • Sábado 12h", "Feminino • Sábado 10h", "Feminino • Sábado 12h"] },

  { nome: "FIFA", icon: "🎮",
    resumo: "Se você manda bem no FIFA e tem vontade de representar a Monetária nas competições universitárias, entre em contato com a gente. Estamos em busca de novos craques.",
    conquistas: [["🥇", "Atual Campeão Feminino — Olimpíadas UFU"]],
    equipe: [["Coordenador", "Ivan"]] },
];

const grid = document.getElementById("modalidadesGrid");
if(grid){
  modalidades.forEach(m => {
    const card = document.createElement("div");
    card.className = "modalidade-card";
    const gens = m.generos || ["m", "f"];
    const partes = [];
    if(gens.includes("m")) partes.push('<span class="g-m">&#9794; Masculino</span>');
    if(gens.includes("f")) partes.push('<span class="g-f">&#9792; Feminino</span>');
    const generoHTML = partes.join('<span class="g-sep">&bull;</span>');

    card.innerHTML = `
      <div class="modalidade-icon">${m.icon}</div>
      <h3>${m.nome}</h3>
      <div class="modalidade-genero">${generoHTML}</div>
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

  // Conquistas (só aparece quando a modalidade tem)
  const conqBloco = document.getElementById("modalConquistasBloco");
  const conqLista = document.getElementById("modalConquistas");
  conqLista.textContent = "";
  if(m.conquistas && m.conquistas.length){
    m.conquistas.forEach(([medalha, texto]) => {
      const li = document.createElement("li");
      const med = document.createElement("span");
      med.className = "medalha";
      med.textContent = medalha;
      li.append(med, document.createTextNode(texto));
      conqLista.appendChild(li);
    });
    conqBloco.hidden = false;
  } else {
    conqBloco.hidden = true;
  }

  // Equipe (treinador / coordenador)
  const eqBloco = document.getElementById("modalEquipeBloco");
  const eqLista = document.getElementById("modalEquipe");
  eqLista.textContent = "";
  if(m.equipe && m.equipe.length){
    m.equipe.forEach(([cargo, nome]) => {
      const item = document.createElement("div");
      item.className = "equipe-item";
      const c = document.createElement("span");
      c.textContent = cargo;
      const n = document.createElement("strong");
      n.textContent = nome;
      item.append(c, n);
      eqLista.appendChild(item);
    });
    eqBloco.hidden = false;
  } else {
    eqBloco.hidden = true;
  }

  // Horários
  const hor = document.getElementById("modalHorarios");
  hor.textContent = "";
  if(m.horarios && m.horarios.length){
    m.horarios.forEach(h => {
      const chip = document.createElement("span");
      chip.className = "horario-chip";
      if(/^Masculino/.test(h)) chip.classList.add("horario-m");
      else if(/^Feminino/.test(h)) chip.classList.add("horario-f");
      chip.textContent = h;
      hor.appendChild(chip);
    });
    if(m.obs){
      const obs = document.createElement("p");
      obs.className = "horario-obs";
      obs.textContent = m.obs;
      hor.appendChild(obs);
    }
  } else {
    const vazio = document.createElement("p");
    vazio.className = "horario-obs";
    vazio.textContent = A_CONFIRMAR;
    hor.appendChild(vazio);
  }

  const texto = encodeURIComponent(`Olá! Tenho interesse na modalidade de ${m.nome} da Monetária 🔵🔴`);
  document.getElementById("modalWhatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`;
  openOverlay(modalOverlay);
}

/* ---------------- GESTÃO ---------------- */
const diretorias = [
  { nome: "Presidência", icon: "👑", foto: "imagens/diretorias/presidencia.JPG.jpeg", desc: "Direção geral da atlética e representação institucional junto à universidade, parceiros e outras atléticas." },
  { nome: "Administrativo", icon: "📋", foto: "imagens/diretorias/administrativo.JPG.jpeg", desc: "Organização interna da gestão: reuniões, documentos, processos e o funcionamento do dia a dia da atlética." },
  { nome: "Esportivo", icon: "🏅", foto: "imagens/diretorias/esportivo.JPEG", desc: "Coordenação de todas as modalidades, treinos, atletas e a participação da Monetária nas competições." },
  { nome: "Eventos", icon: "🎉", foto: "imagens/diretorias/eventos.PNG", desc: "Organização das festas, bailes e ações que agitam a atlética durante o ano todo." },
  { nome: "Financeiro", icon: "💰", foto: "imagens/diretorias/financeiro.JPG.jpeg", desc: "Gestão de mensalidades de sócios, patrocínios, orçamentos e todo o caixa da atlética." },
  { nome: "Marketing", icon: "📣", foto: "imagens/diretorias/marketing.JPG.jpeg", desc: "Redes sociais, identidade visual, criação de conteúdo e divulgação de tudo que a Monetária faz." },
  { nome: "Patrimônio", icon: "📦", foto: "imagens/diretorias/patrimonio.JPEG", desc: "Cuidado com os materiais, uniformes, equipamentos e todo o patrimônio da atlética." },
  { nome: "Produtos", icon: "👕", foto: "imagens/diretorias/produtos.JPG.jpeg", desc: "Criação e venda dos produtos da Monetária: camisas, moletons, uniformes e coleções." },
  { nome: "Social", icon: "🤝", foto: "imagens/diretorias/social.JPG.jpeg", desc: "Integração da galera, ações sociais e o relacionamento da atlética com sócios e a comunidade acadêmica." },
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
  // Placeholder: enquanto não houver foto real, mostra a logo.
  foto.src = d.foto || "imagens/logo.png";
  foto.classList.toggle("is-placeholder", !d.foto);
  document.getElementById("gestaoFotoNote").textContent = d.foto
    ? "" : "📷 Foto ilustrativa — em breve a foto real da diretoria aqui.";
  document.getElementById("gestaoTitle").textContent = d.nome;
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

/* ---------------- NAV MOBILE ---------------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if(navToggle && navLinks){
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
}

/* ---------------- FORMULÁRIO DE CONTATO (Formspree) ---------------- */
const contatoForm = document.getElementById("contatoForm");
if(contatoForm){
  const formNote = document.getElementById("formNote");
  const submitBtn = contatoForm.querySelector('button[type="submit"]');

  contatoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    formNote.className = "form-note";
    formNote.textContent = "Enviando...";
    if(submitBtn) submitBtn.disabled = true;

    try {
      const resposta = await fetch(contatoForm.action, {
        method: "POST",
        body: new FormData(contatoForm),
        headers: { "Accept": "application/json" }
      });

      if(resposta.ok){
        contatoForm.reset();
        formNote.classList.add("form-ok");
        formNote.textContent = "✅ Mensagem enviada! Logo a gente responde.";
      } else {
        const dados = await resposta.json().catch(() => ({}));
        const msg = dados.errors ? dados.errors.map(x => x.message).join(" ") : "";
        formNote.classList.add("form-erro");
        formNote.textContent = "❌ Não deu pra enviar" + (msg ? ": " + msg : ". Tente de novo ou chame no WhatsApp.");
      }
    } catch(err){
      formNote.classList.add("form-erro");
      formNote.textContent = "❌ Sem conexão. Tente de novo ou chame a gente no WhatsApp.";
    } finally {
      if(submitBtn) submitBtn.disabled = false;
    }
  });
}
