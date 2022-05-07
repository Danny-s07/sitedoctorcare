//criar uma funcionalidade diretamente na window para evitar o erro do evento onscroll chamado no body
window.addEventListener('scroll', onScroll);

//funcao criada para dizer que se a barra de rolagem estiver na posição zero ele ficara com um menu , agora se ele estiver maior do que zero o menu ira descer junto com apagina e pegara uma cor
onScroll();//precisa executar apaenas uma vez
function onScroll()
{
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
    
}
//funcao responsavel por quando  estiver na secao ele deixa esta sessao em destaque(ativa) no menu
function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;
  
    // verificar se a seção passou da linha
    // quais dados vou precisar?
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;
  
    // verificar se a base está abaixo da linha alvo
  
    const sectionEndsAt = sectionTop + sectionHeight;
     //o final da seção passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine;
  
    // limites da seção
    const sectionBoundaries =
      sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;
  
    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  
    menuElement.classList.remove('active');
    if (sectionBoundaries) {
      menuElement.classList.add('active');
    }
  }
  


//mostrar o navigation ao fazer o scroll
function showNavOnScroll()
{
    if (scrollY > 0) {
        navigation.classList.add('scroll');
        // console.log(scrollY);
    } 
    else
    {
        navigation.classList.remove('scroll');
    }
}
//mostrar o o botao de voltar ao top ao fazer o scroll
function showBackToTopButtonOnScroll()
{
     if (scrollY > 550) {
        backToTopButton.classList.add('show');
        // console.log(scrollY);
    } 
    else
    {
        backToTopButton.classList.remove('show');
    }
}

//criando e executando a função open menu para quando clicar na imagem que tem os tres riscos ele abre o menu expansivo
function openMenu()
{
    document.body.classList.add('menu-expanded')
}


//criando e executando a função open menu para quando clicar no X ele feche o menu expansivo
function closeMenu()
{
    document.body.classList.remove('menu-expanded')
}


//script para gerar animacao do conteudo conforme decer a tela . Adaptando tb
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content');