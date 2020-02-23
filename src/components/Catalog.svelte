<script>
    import { createEventDispatcher } from 'svelte';
    import FrameBox from "./FrameBox.svelte";

    export let favorites = [];
    export let basket = [];

    const list = ['mountain', 'ocean', 'sea', 'desert', 'forest', 'sky', 'sunrise', 'sunset',
    'cat', 'dog', 'horse', 'pig', 'fox', 'bird', 'rabbit', 'city', 'road', 'car', 'park',
    'burger', 'beer', 'coffe', 'cake', 'ice-cream'];

    // Svelte: special feature to sent events to parent component
    const dispatch = createEventDispatcher();

    function frameboxHeartHandler(event) {
        dispatch('framebox-heart', event.detail)
    }

    function frameboxBasketHandler(event) {
        dispatch('framebox-basket', event.detail)
    }
</script>

<!-- Svelte: HTML template with javascript injections and logic constructions -->
<div class="catalog">
    <!-- Svelte: iterate array "list"  -->
    {#each list as frame, i}
    <div class="frame-box">
        <FrameBox title={frame}
                  heartSelected={favorites.includes(frame)}
                  basketSelected={basket.includes(frame)}
                  on:heart-click={frameboxHeartHandler}
                  on:basket-click={frameboxBasketHandler}
        />
    </div>
    {/each}
</div>

<style>
    .catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: 100%;
    }

   .frame-box {
       width: 300px;
       height: 300px;
       margin: 5px 5px;
   }
</style>