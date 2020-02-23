<script>
    import { createEventDispatcher } from 'svelte'

    // Svelte: special feature to sent events to parent component
    const dispatch = createEventDispatcher()

    function close() {
        // send to parent-component event "close" without params
        dispatch('close')
    }
</script>

<div id="wish-list">
    <h1 style="margin-top: 0">Wish list</h1>
    <button class="btn" on:click={close}>Close</button>
</div>

<style>
    #wish-list {
        position: absolute;
        z-index: 1;
        height: 500px;
        width: 100%;
        background-color: salmon;
    }
</style>