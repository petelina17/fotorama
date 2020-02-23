<script>
    import { createEventDispatcher } from 'svelte';
    import {userStore} from './user'

    export let favoriteNumber = 0
    export let basketNumber = 0

    // Svelte: special feature to sent events to parent component
    const dispatch = createEventDispatcher();

    function heartClick() {
        // send to parent-component event "heart-click" without params
        dispatch('heart-click');
    }

</script>

<div id="nav-panel">
    <h1>PHOTORAMA</h1>
    <div class="spacer">&nbsp;</div>

    <i class="far fa-heart" on:click={heartClick}></i>
    <div class="badge">{$userStore.favoriteNumber}</div>

    <div class="spacer">&nbsp;</div>

    <i class="fas fa-cart-plus"></i>
    <div class="badge">{$userStore.basketNumber}</div>
</div>

<style>
    #nav-panel {
        background-color: #acacac;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #nav-panel>i {
        font-size: 2.5rem;
        /*margin-left: 2em;*/
    }
    #nav-panel>h1:hover, #nav-panel>i:hover {
        color: #f4f4f4;
    }
    .badge {
        border-radius: 40%;
        background-color: #666666;
        color: white;
        width: 2em;
    }
    .spacer {
        width: 2em;
    }
</style>