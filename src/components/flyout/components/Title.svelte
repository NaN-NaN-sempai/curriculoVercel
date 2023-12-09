<script>
    export let name = false;
</script>

<span class={name? "name": ""}><slot></slot></span>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_palette.scss" as palette;

    span {
        font-size: 40px;
        color: palette.$highlight;
        text-transform: uppercase;
        font-family: moupali;

        &.name {
            font-family: sansation;
            text-align: center;
            font-weight: bold;
        }
    }
</style>