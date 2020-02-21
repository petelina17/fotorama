<script>
	import { onMount } from 'svelte';
    import Catalog from "./Catalog.svelte";
    import NavPanel from "./NavPanel.svelte";

    let user = {
        favoriteNumber: 0,
        basketNumber: 0
    };

    let latestFavorite = 'Latest saved';
    let latestBasket = 'Latest add to basket';

    function addFavoriteNumber (event) {
        user.favoriteNumber += 1;
        localStorage.setItem('chicago-user', JSON.stringify(user));
        latestFavorite = event.detail.title;
        // console.log(event)
    }

    function addBasketNumber (event) {
        user.basketNumber += 1;
		localStorage.setItem('chicago-user', JSON.stringify(user));
		latestBasket = event.detail.title;
    }

    // Every component has a lifecycle that starts when it is created, and ends when it is destroyed.
	// There are a handful of functions that allow you to run code at key moments during that lifecycle.
	// Svelte specific function: runs after the component is first rendered to the DOM
	onMount(async () => {
		const stored = localStorage.getItem('chicago-user');
		if (stored != null && stored !== '') {
			user = JSON.parse(stored)
		}

	});
</script>

<main>
<!--	reactivity: component watches parameter values changing-->
    <NavPanel basketNumber={user.basketNumber} favoriteNumber={user.favoriteNumber}/>

<!--	Svelte: bind function to button click -->
    <button on:click={addFavoriteNumber}>+favorite</button>
    <span>{latestFavorite}</span>
    <button on:click={addBasketNumber}>+basket</button>
    <span>{latestBasket}</span>

    <Catalog on:framebox-heart={addFavoriteNumber} on:framebox-basket={addBasketNumber} />
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