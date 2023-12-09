<script>
    import Scroller from "./Scroller.svelte";

    let designer = import.meta.glob('$assets/imgs/tools/designer/*');
    let adobe = import.meta.glob('$assets/imgs/tools/designer/Adobe/*');
    let developer = import.meta.glob('$assets/imgs/tools/developer/*');

    let tools = {...adobe, ...designer, ...developer};

    let toolsArray = [];
    
    for (const path in tools) {
        const name = path.split('/').pop()
            .replace('.png', '')
            .replace('.svg', '');

        toolsArray.push({
            path,
            name
        });
    }
</script>

<div class="wrapper">
    <Scroller>
        {#each toolsArray as tool}
    
            <img class="toolImage" src={tool.path} alt={tool.name} title={tool.name}>
            
        {/each}
    </Scroller>
</div>


<style lang="scss">
    .wrapper {
        width: 100%;
        max-width: 1940px;
    }
    .toolImage {
        height: 60px;

        filter: drop-shadow(0 10px 2px rgba(0, 0, 0, 0.25));

        transition: filter .5s;

        &:hover {
            filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.5));
        }
    }
</style>
