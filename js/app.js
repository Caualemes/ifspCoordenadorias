function carregarPagina(pagina) {
  const conteudo = document.getElementById('conteudo-principal');

  if (pagina === 'adm') {
    conteudo.innerHTML = `
      <div class="main-title">
        <span>COORDENADORIA DE CURSO</span>
        <h1>TÉCNICO EM ADMINISTRAÇÃO</h1>
      </div>
      <section class="main-section">
        <h3>SOBRE O CURSO</h3>
        <p> Os Cursos Técnicos em Administração, tanto nas modalidades Integrado quanto Concomitante/Subsequente ao ensino médio,
            têm como objetivo formar profissionais com competências para atuar nas áreas administrativas de empresas públicas e privadas.
            O aluno é preparado para executar atividades relacionadas à gestão de pessoas, marketing, logística, finanças e processos organizacionais. 
            A formação visa desenvolver habilidades práticas, espírito empreendedor e uma visão estratégica do ambiente de negócios.</p>
      </section>
      <section class="main-coord">
        <img src="imgs/ana.jpg" alt="Coordenador Adm">
        <div class="coord-details">
          <div class="coord info">
            <h3>Ana Claudia Bansi</h3>
            <span>Email: ana_bansi@ifsp.edu.br</span>
          </div>
          <div class="coord horario">
            <h3>HORÁRIO</h3>
            <span>Segunda a Sexta, 08h às 18h</span>
          </div>
        </div>
      </section>
    `;
  } else if (pagina === 'info') {
    conteudo.innerHTML = `
      <div class="main-title">
        <span>COORDENADORIA DE CURSO</span>
        <h1>TÉCNICO INTEGRADO EM INFORMÁTICA</h1>
      </div>
      <section class="main-section">
        <h3>SOBRE O CURSO</h3>
        <p>O Curso Técnico Integrado em Informática oferece ao estudante a oportunidade de concluir o ensino médio junto com uma 
            formação técnica de qualidade na área de Tecnologia da Informação. O curso prepara o aluno para atuar em desenvolvimento de software,
            manutenção de computadores, redes de computadores e suporte técnico. Além da base técnica, o estudante desenvolve competências críticas,
            éticas e cidadãs, fundamentais para o mercado de trabalho e para a continuidade dos estudos em nível superior.</p>
      </section>
      <section class="main-coord">
        <img src="imgs/wellington.png" alt="Coordenador Info">
        <div class="coord-details">
          <div class="coord info">
            <h3> Wellington da Silva Borazzo </h3>
            <span>Email: wellington.silva@ifsp.edu.br</span>
          </div>
          <div class="coord horario">
            <h3>HORÁRIO</h3>
            <span>Segunda a Sexta, 08h às 22h</span>
          </div>
        </div>
      </section>
    `;
  } else if (pagina === 'mec') {
    conteudo.innerHTML = `
      <div class="main-title">
        <span>COORDENADORIA DE CURSO</span>
        <h1>TECNOLOGIA EM MECATRÔNICA INDUSTRIAL</h1>
      </div>
      <section class="main-section">
        <h3>SOBRE O CURSO</h3>
        <p> O Curso Superior de Tecnologia em Mecatrônica Industrial forma profissionais capacitados para atuar na automação de processos
            industriais, desenvolvimento de sistemas mecatrônicos e manutenção de equipamentos automatizados. Durante o curso, o estudante
            adquire conhecimentos nas áreas de eletrônica, mecânica, automação e controle de processos. O foco é formar tecnólogos com visão
            crítica, capacidade de inovação e aptidão para solucionar problemas complexos da indústria moderna.</p>
      </section>
      <section class="main-coord">
        <img src="https://placehold.co/300x200" alt="Coordenador Mecânica">
        <div class="coord-details">
          <div class="coord info">
            <h3>GRACILIANO ANTONIO DAMAZO</h3>
            <span>Email: graciliano@ifsp.edu.br</span>
          </div>
          <div class="coord horario">
            <h3>HORÁRIO</h3>
            <span>Segunda a Sexta, 07h às 23h</span>
          </div>
        </div>
      </section>
    `;
  }
}
// Faz o site abrir direto na página de Administração ao carregar
window.onload = function() {
  carregarPagina('adm');
}

function toggleMenu() {
  const menu = document.querySelector('.sidebar-menu');
  menu.classList.toggle('show');
}



