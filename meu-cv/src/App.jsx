import './App.css';
import foto from './foto.jpg'; 

function App() {
  return (
    <div className='curriculo'>

      {/*COLUNA AZUL */}
      <aside className='sidebar'>
        <img src={ foto } alt=" foto jp " className='foto' />

        <section className='dados'>
          <h2>Dados:</h2>
          <ul>
          <li>Nome: João Pedro Veloso Fernandes</li>
          <li>Telefone: 21 98542-3155</li>
          <li>Data de Nascimento: 13/06/2002</li>
          <li>E-mail: joao.veloso@oplium.com</li>
          </ul>
        </section>

        <section className='formação-acadêmica'>
          <h2>Formação Acadêmica</h2>
          <p><strong>E.T.E. Henrique Lage - Formação em Téc. Eletrônica:</strong> 2017/2019</p>
          <ul>
          <li>Manutenção preventiva de equipamentos</li>
          <li>Manueseio e programação de micro computador</li>
          <li>Projeto técnico bem avaliado em feiras de ciência</li>
          </ul>
        </section>

        <section className='formação-acadêmica'>
          <p><strong>Anhanguera Educacional - Formação em Engenharia de Software:</strong> Cursando</p>
        </section>

        <section className='habilidades-complementares'>
          <h2><strong>Habilidades Complementares</strong></h2>
          <ul>
          <li>JavaScript - Cursando</li>
          <li>Inglês - Nível Básico</li>
          </ul>
        </section>

      </aside>

      {/* COLUNA BRANCA */}
      <main className='conteudo'>

        <header>
          <h1>Currículo Profissional</h1>
        </header>

        <section className='perfil-profissional'>
          <h2>Perfil profissional</h2>
          <p>
            Aos 24 anos, busco minha primeira oportunidade profissional como
            desenvolvedor.
          </p>
          <p>
            Formado em eletronica e cursando Engenharia de Software. Busco
            oportunidades para desenvolvimento das minhas habilidades para
            construção de uma carreira estruturada e solida.
          </p>
        </section>

        <section className='experiencia-profissional'>
          <h2>Experiencia Profissional</h2>
          <p><strong>BR Technology:</strong> Mar. 2024 a Out. 2025</p>
        <ul>
            <li><p>Suporte Técnico</p></li>
            <li>Manutenção de computadores</li>
            <li>Gestão de Antivírus</li>
        </ul>
          <p><strong>Estágio Oplium Cyber For Life:</strong> Atualmente</p>
          <ul>
          <li>Suporte técnico</li>
          <li>Gestão de contas e acessos</li>
          <li>Provisionamento de computadores</li>
          <li>Gestão de Antivírus</li>
          </ul>
          
        </section>

      </main>

    </div>
  );
}

export default App;