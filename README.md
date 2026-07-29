# AAA Monetária UFU — Landing Page

Site da **Associação Atlética Acadêmica Monetária** da UFU, formada pelos cursos de
Gestão da Informação, Relações Internacionais, Administração, Economia e Ciências Contábeis.

## Seções

- **Início** — logo circular com anel animado nas cores da atlética.
- **Modalidades** — 13 modalidades (masculino e feminino). Ao clicar, abre um pop-up com o resumo,
  os dias de treino separados por gênero e um botão para falar no WhatsApp.
- **Sócios** — benefícios do *Sócio Tamanduá* e os planos (R$ 30/mês e R$ 80/semestre).
- **Eventos** — Baile da Monetária Open (12 de setembro, 1º lote R$ 60).
- **Gestão** — as 9 diretorias, cada uma com pop-up e foto do time.
- **Contato** — página separada com formulário que encaminha a mensagem pelo WhatsApp.

Tem alternância entre tema claro e escuro (o botão 🌙/☀️ no menu), e o layout é responsivo.

## Estrutura

```
index.html          página principal
contato.html        página de contato
css/style.css       estilos (temas claro/escuro via variáveis CSS)
js/script.js        modalidades, diretorias, pop-ups e tema
imagens/            logo, favicon e arte do baile
imagens/redes sociais/  ícones do WhatsApp, Instagram e TikTok
```

## Como rodar

É um site estático, sem dependências. Basta abrir o `index.html` no navegador,
ou servir a pasta localmente:

```bash
python -m http.server 8000
```

E acessar `http://localhost:8000`.

## Pendências

- **Dias de treino**: só a Peteca está com os horários reais. As demais modalidades
  estão como "A confirmar" em `js/script.js`.
- **Foto da diretoria de Eventos**: é a única sem foto — o pop-up dela usa a logo como
  imagem provisória. Basta salvar em `imagens/diretorias/` e apontar o campo `foto`
  no array `diretorias` em `js/script.js`.

## Contato

- WhatsApp: +55 34 99698-0050
- Instagram: [@atleticamonetaria](https://www.instagram.com/atleticamonetaria/)
- TikTok: [@atletica.monetaria](https://www.tiktok.com/@atletica.monetaria)
