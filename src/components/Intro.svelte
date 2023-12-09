<script>
    import Year from "./Year.svelte";
    import Content from "./content/Content.svelte";
    import Flyout from "./flyout/Flyout.svelte";

    import palette from "$style/_palette.scss?export";
    
    let declaration = [
        {
            content: "Procuro uma oportunidade profissional que me conduza a uma jornada de aprendizado e crescimento. Sou flexível, criativo e eficiente, adapto-me facilmente a mudanças. Minhas experiências anteriores me enriqueceram com habilidades valiosas. Estou entusiasmado para embarcar nesta jornada em direção ao sucesso profissional!",
        },
    ];
    let diferentials = [
        {
            list: true,
            content: [
                "Apaixonado por desafios",
                "Rápida aprendizagem",
                "Versátil e adaptável",
                "Sincero e ético",
                "Dedicado à organização",
                "Comprometido com excelência e qualidade",
                "Fluente em inglês",
                "Colaborativo e eficiente em trabalho em equipe",
                "Criativo e inovador em soluções tecnológicas",
                "Exímio em JavaScript",
                "Forte expertise em Design",
                "Experiência em scripts JSX para aplicativos Adobe",
                "Experiência em desenvolvimento WEB e mobile",
                "Experiência na criação de sistemas",
            ]
        },
    ]
</script>

<div class="wrapper">
    <div class="flyout">
        <Flyout />
    </div>
    <div class="right">
        <div class="contentHeader">
            <div class="year">
                <Year> <span class="hidden">CURRÍCULO</span> 2024 </Year>
            </div>
            <h1 class="title">Luís Henrique de Almeida</h1>
        </div>
        <div class="content">
            <Content title="DECLARAÇÃO PROFISSIONAL" icon="Declaration" color={palette.primary} colorB={palette.highlight} content={declaration}/>
            <Content title="DIFERENCIAIS" icon="Diferentials" color={palette.primary} colorB={palette.highlight} content={diferentials}/>
        </div>
    </div>
</div>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;


    .contentHeader {
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            font-family: robotoMono;
            text-transform: uppercase;
            color: palette.$highlight;
            text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .year {
            margin-left: 20px;

            .hidden {
                display: none;
            }
        }
    }

    .wrapper {
        display: flex;
        justify-content: center;
        font-size: 30px;
        text-align: right;
        padding: 25px;

        max-width: 1940px;

        .right {
            width: 100%;
            max-width: 1300px;
        }
    }

    

    @media only screen and (max-width: defaults.$mediaMaxWidth) { 
        .contentHeader {
            flex-direction: column;
            margin-bottom: 50px;

            .title  {
                display: none;
            }

            .year {
                width: 100%;
                margin-left: 0;

                .hidden {
                    display: inline;
                }
            }
        }
        .wrapper {
            padding: 0;
            flex-direction: column;
            align-items: center;

            .flyout {
                margin-bottom: 10px;
            }
        }
    }
</style>