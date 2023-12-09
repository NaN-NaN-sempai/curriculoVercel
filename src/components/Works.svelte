<script>
    import Content from "./content/Content.svelte";

    import palette from "$style/_palette.scss?export";
    import SplitScreen from "./SplitScreen.svelte";

    let works = [
        {
            title: "DESIGNER GRAFICO",
            type: "INFORMAL",
            time: "2021/2023",
            content: `
            Trabalhei na empresa Inovar Personalizações como designer, criando designs exclusivos para encadernações e cartonados. Durante esse período, aprimorei o sistema de gestão de clientes que usávamos, aplicando minhas habilidades de desenvolvedor inovador.
            `,
        },
    ];
    let worksPlus = [
        {
            title: "PESQUISADOR",
            type: "CONTRATO",
            time: "1 mês -  2023",
            content: `
            Durante um mês, viajei por várias cidades da Bahia realizando pesquisas em nome da empresa UniFel.
            `,
        },
        {
            title: "ENTREGADOR DE PACOTES",
            type: "CONTRATO",
            time: "2 mêses -  2023",
            content: `
            Trabalhei como entregador na J&T Express, aprimorando habilidades organizacionais, eficiência na gestão de rotas e o cumprimento de metas. Responsável pela entrega pontual dos pacotes, mantive um alto padrão de desempenho.
            `,
        },
        {
            title: "FREELANCER",
            type: "INFORMAL",
            time: "PERIODICAMENTE",
            content: `
            Atuo como freelancer, oferecendo meus serviços tanto na programação quanto no design.
            `,
        },
    ];
</script>

<SplitScreen>
    <div slot="left">
        <Content
            title="EXPERIÊNCIA PROFISSIONAL"
            icon="Works"
            content={works}
            color={palette.secondary}/>
    </div>
    <div slot="right">
        <Content
            title="OUTROS"
            icon="Works"
            content={worksPlus}
            color={palette.primary}
            colorB={palette.highlight}
            plus/>
    </div>
</SplitScreen>