<script>
    import Intro from '$components/Intro.svelte';
    import Education from '$components/Education.svelte';
    import Tools from '$components/Tools.svelte';
    import Projects from '$components/Projects.svelte';
    import SecondFlyout from '$components/flyout/SecondFlyout.svelte';
    import Year from '$components/Year.svelte';
    import Works from '$components/Works.svelte';
    import DarkModeSwitch from '$components/DarkModeSwitch.svelte';
</script>



<div class="outer">
    <div class="inner">
        <div class="darkmode">
            <DarkModeSwitch />
        </div>
        <div class="intro">
            <Intro />
        </div>
        <div class="tools">
            <Tools />
        </div>
        <div class="education">
            <Education />
        </div>
        <div class="splitter">
            <div class="name">
                <span> Luís Henrique de Almeida </span>
            </div>
            <div class="secondFlyout">
                <SecondFlyout />
            </div>
            <Year><span class="hidden">CURRÍCULO</span> 2024</Year>
        </div>
        <div class="projects">
            <Projects />
        </div>
        <div class="works">
            <Works />
        </div>
    </div>
</div>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    @media only screen and (min-width: defaults.$mediaMinWidth) {
        .outer {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .inner > * {
        margin-block: 40px;
    }

    .darkmode {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .splitter {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;

        .hidden {
            display: none;

            @media (max-width: defaults.$mediaMaxWidth) {
                display: block;
            }
        }

        .name {
            font-family: sansation;
            font-weight: bold;
            text-transform: uppercase;
            color: palette.$highlight;
            text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 40px;
            text-align: center;

            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        @media (max-width: defaults.$mediaMaxWidth) {
            flex-direction: column;
        }
    }
</style>