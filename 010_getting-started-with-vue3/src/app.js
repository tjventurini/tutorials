const app = Vue.createApp({
    data() {
        return {
            greeting: 'Hello Vue.js!',
            showIntro: true,
            x: 0,
            y: 0,
            books: [
                { title: "The Design of Everyday Things", author: "Don Norman", pages: 454, isFav: true },
                { title: "The Most Human Human", author: "Brian Christian", pages: 654, isFav: false },
                { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 954, isFav: false },
            ],
            vueCheatSheet: 'https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf',
        }
    },

    methods: {
        toggleIntro() {
            this.showIntro = !this.showIntro
        },
        handleEvent(event, text) {
            console.log(event)
            if (text)
                console.log(text)
        },
        handleMousemove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        favoriteBooks() {
            return this.books.filter(book => book.isFav)
        }
    }
})

app.mount('#app')

