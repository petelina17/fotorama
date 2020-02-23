import { writable } from 'svelte/store'

let user = {
    favoriteNumber: 0,
    basketNumber: 0,
    favoriteList: []
};

export let userStore = writable(user)