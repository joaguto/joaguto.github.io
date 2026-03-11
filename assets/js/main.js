/*==================== MENU MOBILE (ABRIR E FECHAR) ====================*/
// Passo 1: Cria a função que identifica o botão do menu e a lista de links
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Se os dois elementos existirem na tela, adiciona o evento de clique
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // Alterna a classe 'show' no CSS para fazer o menu aparecer ou sumir da lateral
            nav.classList.toggle('show')
        })
    }
}
// Chama a função passando os IDs reais do nosso HTML
showMenu('nav-toggle','nav-menu')


/*==================== MENU ATIVO & FECHAR MENU AO CLICAR ====================*/
// Passo 2: Pega todos os links do menu superior
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  // Remove a classe 'active' (que coloca a linha amarela embaixo) de todos os links
  navLink.forEach(n => n.classList.remove('active'));
  // Adiciona a classe 'active' apenas no link que o usuário acabou de clicar
  this.classList.add('active');
  
  // Como o usuário clicou para ir a uma seção, nós escondemos o menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
// Adiciona essa ação de clique para cada link do menu
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== ANIMAÇÕES DE ROLAGEM (SCROLL REVEAL) ====================*/
// Passo 3: Configura como os elementos vão "surgir" na tela (de cima para baixo, levando 2 segundos)
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true // Isso faz a animação acontecer de novo se o usuário subir e descer a página
});

// SCROLL HOME: Animando a primeira tela (Hero Section)
sr.reveal('.home__title',{}); // Título principal surge primeiro
sr.reveal('.button',{delay: 200}); // O botão do WhatsApp surge com 200ms de atraso
sr.reveal('.home__img',{delay: 400}); // A logo da Bom Brasil surge depois
sr.reveal('.home__social-icon',{ interval: 200}); // O ícone de telefone surge suavemente

// SCROLL ABOUT: Animando a seção "A Empresa"
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

// SCROLL SERVICES: Animando os ícones de Serviços (Antigo Skills)
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); // O "interval" faz cada caixinha de serviço surgir uma depois da outra (efeito cascata)
sr.reveal('.skills__img',{delay: 600});

// SCROLL AREAS: Animando as regiões de atendimento (Antigo Work)
sr.reveal('.work__img',{interval: 200}); // Fotos dos bairros surgindo em cascata

// SCROLL CONTACT: Animando a área final de orçamentos (Substituído o antigo .contact__input)
sr.reveal('.contat_title',{}); 
sr.reveal('.contat_text',{interval: 200}); // Textos de telefone e WhatsApp surgindo em cascata
