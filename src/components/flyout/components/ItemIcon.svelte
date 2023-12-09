<script>
    
    /* import Declaration from "$components/icons/Declaration.svelte";
    import Diferentials from "$components/icons/Diferentials.svelte";
    import Email from "$components/icons/Email.svelte";
    import Github from "$components/icons/Github.svelte";
    import Location from "$components/icons/Location.svelte";
    import Phone from "$components/icons/Phone.svelte";
    import Website from "$components/icons/Website.svelte";
    import Whatsapp from "$components/icons/Whatsapp.svelte";

    let Icons = [
        Declaration,
        Diferentials,
        Email,
        Github,
        Location,
        Phone,
        Website,
        Whatsapp
    ]; */

    import Icons from "$components/icons/";

    export let size = "29px";
    export let icon = "Email";
    export let color = "#000000";
    export let colorB = "#FFFFFF";

    export let plus = false;

    let selectedIcon = Icons[icon];

    if(!selectedIcon) selectedIcon = Icons["Email"];
</script>

<div class="container" style="--size: {size}">
    <div class="icon">
        <svelte:component this={selectedIcon} color={color} colorB={colorB} />
        {#if plus}
            <div class="plus">
                <svelte:component this={Icons["Plus"]} color={color} colorB={colorB} />          
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    @use "$style/_palette.scss" as palette;

    .container {
        background-color: palette.$highlight;
        border-radius: 50%;

        width: var(--size);
        height: var(--size);

        position: relative;


        .icon {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);

            .plus {
                position: absolute;
                left: 12px;
                top: 9px;
            }
        }
    }
</style>