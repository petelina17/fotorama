<script>
    export let title
</script>

<div class="frame">
    {title}
    <div class="toolbar">
        <i class="fas fa-search-plus"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-cart-plus"></i>

    </div>
</div>

<style>
    .frame {
        background-color: #dddddd;
        font-size: 3rem;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .toolbar {
        background-color: white;
        color: #666666;
        /*height: 3rem;*/
        font-size: 2rem;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0.25rem 0.5rem;
        opacity: 0.5;
    }
    .toolbar>i {
        margin: 0 0.8rem;
    }
    .toolbar:hover {
        opacity: 1;
    }
</style>