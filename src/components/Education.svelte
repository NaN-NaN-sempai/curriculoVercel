<script>
    import Content from "./content/Content.svelte";

    import palette from "$style/_palette.scss?export";
    import SplitScreen from "./SplitScreen.svelte";

    let formation = [
        {
            title: "CS50 - HARVARD",
            type: "CURSO PROFISSIONALIZANTE",
            time: "2023",
            content: "-CURSO EM HARVARD - A INSERIR-",
        },
        {
            title: "Ciências da Computação",
            type: "ENSINO SUPERIOR - INCOMPLETO",
            time: "2019/2023",
            content: "Cursei a Licenciatura no IF Baiano - Sr. do Bonfim, onde adquiri um sólido conhecimento em programação e tecnologia.",
        },
        {
            title: "Suporte Tecnico em TI",
            type: "CURSO PROFISSIONALIZANTE",
            time: "2017/2018",
            content: "Iniciei minha carreira acadêmica com um curso de Suporte Técnico em TI no SENAI Cetind em Lauro de Freitas, obtendo uma base sólida sobre redes, programação, suporte tecnico e outros assuntos, fortalecendo minha paixão pela área.",
        },
    ];
    let formationPlus = [
        {
            title: "LGPD",
            type: "CURSO PROFISSIONALIZANTE",
            time: "4 hrs - 2021",
            content: `Fiz um curso online no SENAI São Paulo sobre "Privacidade e Proteção de Dados", aprendendo sobre segurança de informações e regulamentações de privacidade.`,
        },
        {
            title: "Competências Transversais em Empreendedorismo",
            type: "CURSO PROFISSIONALIZANTE",
            time: "14 hrs - 2017",
            content: "Fiz um curso a distância no SENAI Bahia sobre Empreendedorismo, adquirindo habilidades essenciais relacionadas ao empreendedorismo e à gestão de negócios.",
        },
        {
            title: "Competências Transversais em Lógica de Programação",
            type: "CURSO PROFISSIONALIZANTE",
            time: "14 hrs - 2017",
            content: "Cursei a distância no SENAI Bahia o curso de Lógica de Programação, adquirindo fundamentos em programação e lógica.",
        },
    ];
</script>

<SplitScreen>
    <div slot="left">
        <Content
            title="FORMAÇÃO ACADÊMICA"
            icon="Education"
            content={formation}
            color={palette.secondary}/>
    </div>
    <div slot="right">
        <Content
            title="CURSOS COMPLEMENTARES"
            icon="Education"
            content={formationPlus}
            color={palette.primary}
            colorB={palette.highlight}
            plus/>
    </div>
</SplitScreen>