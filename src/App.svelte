<script>
    import {onMount} from 'svelte'
    import Catalog from './Catalog.svelte'
    import NavPanel from './NavPanel.svelte'

    import {userStore} from './user'

    let latestFavorite = 'Latest saved';
    let latestBasket = 'Latest add to basket';

    function addFavoriteNumber(event) {
        latestFavorite = event.detail.title
        if (!$userStore.favoriteList.includes(latestFavorite)) {
            $userStore.favoriteList.push(latestFavorite)
            $userStore.favoriteNumber += 1
        }
        localStorage.setItem('chicago-user', JSON.stringify($userStore))
    }

    function addBasketNumber(event) {
        $userStore.basketNumber += 1
        localStorage.setItem('chicago-user', JSON.stringify($userStore))
        latestBasket = event.detail.title
    }

    // Every component has a lifecycle that starts when it is created, and ends when it is destroyed.
    // There are a handful of functions that allow you to run code at key moments during that lifecycle.
    // Svelte specific function: runs after the component is first rendered to the DOM
    onMount(async () => {
        const storedJSON = localStorage.getItem('chicago-user')
        const stored = JSON.parse(storedJSON)
        Object.keys($userStore).forEach(key => {
            $userStore[key] = stored[key]
        })
    })
</script>

<main>
    <NavPanel/>

    <!--	Svelte: bind function to button click -->
    <button on:click={addFavoriteNumber}>+favorite</button>
    <span>{latestFavorite}</span>
    <button on:click={addBasketNumber}>+basket</button>
    <span>{latestBasket}</span>

    <!--	reactivity: component watches parameter values changing-->
    <Catalog favorites={$userStore.favoriteList}
             on:framebox-heart={addFavoriteNumber}
             on:framebox-basket={addBasketNumber}
    />
</main>

<style>
    main {
        text-align: center;
        padding: 0;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>