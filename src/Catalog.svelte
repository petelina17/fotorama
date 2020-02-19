<script>
    import FrameBox from "./FrameBox.svelte";
    const list = ['mountain', 'ocean', 'sea', 'desert', 'forest', 'sky', 'sunrise', 'sunset',
    'cat', 'dog', 'horse', 'pig', 'fox', 'bird', 'rabbit', 'city', 'road', 'car', 'park',
    'burger', 'beer', 'coffe', 'cake', 'ice-cream']
</script>

<div class="catalog">
    {#each list as frame, i}
    <div class="frame-box">
        <FrameBox title={frame} />
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