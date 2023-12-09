<script>
    import SingleContent from "./SingleContent.svelte";
    import Content from "./content/Content.svelte";
    
    import palette from "$style/_palette.scss?export";

    let projects = [
        {
            title: "Projetos Pessoais",
            type: "HOBBY",
            time: "PERIODICAMENTE",
            content: `
            Além destes projetos citados aqui, tenho uma ampla variedade de projetos disponíveis no meu perfil do GitHub: <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> ou no meu site pessoal: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. Meus projetos demonstram minha paixão por aprender e minha capacidade de criar soluções inovadoras por meio da programação.
            `,
        },
        {
            title: "PDEF",
            type: "PROJETO ACADÊMICO",
            time: "2021",
            content: `
            Plotador de Funções (PDEF), projeto requesitado durante a matéria de Aplicações Gráficas no IF Baiano. O PDEF é uma plataforma que permite a criação de gráficos usando JavaScript. Esse projeto se tornou uma ferramenta valiosa para visualizar e compreender conceitos gráficos, além de ser uma realização pessoal como programador. Pode ser acessado em: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>
            `,
        },
        {
            title: "Aplicativo LiCA App",
            type: "PROJETO ACÂDEMICO",
            time: "2021",
            content: `
            O LiCA App foi meu primeiro aplicativo para Android, desenvolvido com meu colega Joel Junior como parte da disciplina de Aplicações Gráficas no IF Baiano. Este aplicativo foi projetado para exibir a ementa do Curso de Licenciatura em Ciências Agrárias. Disponível em: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>
            `,
        },
        {
            title: "Oficina Sobre Computação",
            type: "ESTÁGIO ACADÊMICO",
            time: "2022",
            content: `
            Na matéria Estágio I no IF Baiano, eu e meu colega Marcos Santos organizamos uma oficina online (devido à pandemia de COVID-19) de "Introdução à Computação", abordando tópicos como história da computação, hardware, software, redes, programação, desenvolvimento web e  oportunidades de emprego. Algumas informações em: 
            <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>
            `,
        },
        {
            title: "Artigo Publicado",
            type: "PROJETO ACÂDEMICO",
            time: "2022",
            content: `
            Participei do Programa Institucional de Bolsas de Iniciação à Docência (PIBID) trabalhando com o professor de física Damon Ferreira Farias, e juntamente com colegas, publiquei um artigo no Conedu sobre segurança da informação nas escolas. PDF disponível em: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>
            `,
        },
        {
            title: "Programa para Computador",
            type: "HOBBY / NECESSIDADE PESSOAL",
            time: "2023",
            content: `
            O Windows App Folder é um aplicativo para Windows feito com Electron.js que cria pastas personalizadas para organizar aplicativos ou arquivos, inspirado nas pastas de aplicativos da Samsung no Android.  Acesse: <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>
            `,
        },
        {
            title: "UseBase",
            type: "HOBBY / NECESSIDADE PESSOAL",
            time: "2023",
            content: `
            O UseBase é uma biblioteca JavaScript versátil projetada para simplificar o processo de codificação e decodificação de números usando várias bases numéricas. Seja para representar inteiros em binário, hexadecimal, conjuntos de caracteres personalizados ou até emojis, o UseBase oferece uma solução flexível. Disponível em  <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>
            `,
        },
    ];

    let projects2 = [
        {
            title: "MPJS",
            type: "Projeto pessoal",
            time: "EM DESENVOLVIMENTO",
            content: `
            Math Plotter Javascript (MPJS) é uma evolução do PDEF, agora com uma interface aprimorada que incorpora o Monaco Editor e uma sintaxe de JavaScript mais avançada para criar gráficos complexos. Disponível em: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>
            `,
        },
    ];
</script>


<SingleContent>
    <Content
        title="TRABALHOS E PROJETOS"
        icon="Projects"
        content={projects}
        color={palette.primary}
        colorB={palette.highlight}/>
    <Content
        title="PROJETOS EM DESENVOLVIMENTO"
        plus
        icon="Projects"
        content={projects2}
        color={palette.primary}
        colorB={palette.highlight}/>
</SingleContent>