<script>
    import { createEventDispatcher } from 'svelte'
    import {userStore} from './user'

    // Svelte: special feature to sent events to parent component
    const dispatch = createEventDispatcher()

    function close() {
        // send to parent-component event "close" without params
        dispatch('close')
    }

    function removeItemClick(item) {
        $userStore.basketList = $userStore.basketList.filter(x => x !== item)
        $userStore.basketNumber = $userStore.basketList.length
    }
</script>

<div id="cart-list">
    <div class="title">Your cart</div>

    <ul class="list">
        <!-- Svelte Store: favoritesList form userStore updates automatically
        every time user click heart, that changes farvoritesList in the store
        -->
        {#each $userStore.basketList as item}
            <li class="list-item">
                <i class="far fa-times-circle i-close" on:click={removeItemClick(item)}></i>
                <div class="photo">photo</div>
                <div>{item}</div>
            </li>
        {/each}
    </ul>

    <button class="btn button" on:click={close}>Close</button>
</div>

<style>
    #cart-list {
        position: absolute;
        top: 4rem;
        min-height: 300px;
        width: 100%;
        background-color: #e1efff;
    }
    .title {
        font-size: 2rem;
        font-weight: bolder;
        padding-top: 0.5em;
        padding-bottom: 0.3em;
    }
    .i-close {
        line-height: 4rem;
        margin-right: 1rem;
    }
    .list {
        list-style: none;
        text-align: left;
        font-size: 2rem;
        /*line-height: 3rem;*/
    }
    .list-item {
        display: flex;
        margin-bottom: 0.5rem;
    }
    .photo {
        height: 4rem;
        line-height: 3.5rem;
        width: 6rem;
        background-color: gray;
        margin-right: 1rem;
        border: 2px solid lightgray;
        font-size: 1.2rem;
        color: white;
        text-align: center;
    }
</style>