const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    },
    methods: {
        details() {
            return this.details
        },
        updateCart(id) {
            this.cart.push(id)
        }
    }
})