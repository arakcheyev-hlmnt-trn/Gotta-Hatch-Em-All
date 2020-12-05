const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            link: 'https://www.google.com',
            inStock: true,
            inventory: 100,
            onSale: false
        }
    }
})