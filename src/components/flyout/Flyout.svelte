<script>
    import Comp from "$components/flyout/components";
    import palette from "$style/_palette.scss?export";
</script>

<Comp.Panel>
    <Comp.Icon size={"200px"} />

    <div class="name">
        <Comp.Title name={true}>Luís Henrique de Almeida</Comp.Title>
    </div>

    <Comp.Title>Contatos:</Comp.Title>
    
    <div class="itemList">
        <a class="link item" href="mailto:luis.h.wrk@gmail.com" target="_blank">
            <Comp.CompoundItem icon="Email" color={palette.secondary}>
                luis.h.wrk@gmail.com
            </Comp.CompoundItem>
        </a>
        
        <div class="item">
            <Comp.CompoundItem icon="Phone" color={palette.secondary}>
                +55 (71) 98883-4482
            </Comp.CompoundItem>
        </div>

        <a class="link item" href="https://wa.me/+5574981395580" target="_blank">
            <Comp.CompoundItem icon="Whatsapp" color={palette.secondary} colorB={palette.highlight}>
                +55 (74) 98139-5580
            </Comp.CompoundItem>
        </a>
    
        <a class="link item" href="https://luishenrique.site/pt" target="_blank">
            <Comp.CompoundItem icon="Website" color={palette.secondary}>
                luishenrique.site
            </Comp.CompoundItem>
        </a>

        <a class="link item" href="https://github.com/NaN-NaN-sempai" target="_blank">
            <Comp.CompoundItem icon="Github" color={palette.secondary} colorB={palette.highlight}>
                NaN-NaN-sempai
            </Comp.CompoundItem>
        </a>

        <div class="item">
            <Comp.CompoundItem icon="Location" color={palette.secondary} colorB={palette.highlight}>
                <div class="lineHeight">
                    Sr. do Bonfim,
                    <br>
                    BA, Brasil
                </div>
            </Comp.CompoundItem>
        </div>
    </div>
</Comp.Panel>


<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    .itemList {
        margin-bottom: 70px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: nowrap;
    }

    .lineHeight {
        line-height: 15px;
        text-align: left;
        
        font-family: moupali;

        user-select: text;
    }

    .link {
        color: palette.$highlight;
    }

    .name {
        display: none;
    }

    
    @media only screen and (max-width: defaults.$mediaMaxWidth) {  
        .name {
            display: block;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 10px;
        }      
        .itemList {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-bottom: 0;

            .item {
                width: 200px;
            }
        }
    }
</style>
