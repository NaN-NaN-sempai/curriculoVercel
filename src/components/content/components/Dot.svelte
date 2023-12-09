<script>
    import ItemIcon from "$components/flyout/components/ItemIcon.svelte";

    export let color = "#FFFFFF";
</script>

<div style="--color: {color}" />


<style lang="scss">
    @use "$style/palette.scss" as palette;

    div {
        position: sticky;
        top: 20px;
        background-color: var(--color);
        width:  9px;
        height: 9px;
        margin-top: 7px;
        border: 5px solid palette.$highlight;
        border-radius: 50%;

        --time: 1s;

        transition:
            border-radius var(--time),
            transform var(--time),
            box-shadow var(--time);

        &:hover, &:active {
            border-radius: 2px;
            transform: skew(-45deg, 45deg);
            box-shadow: 0 0 5px 5px var(--color);
        }
    }
</style>