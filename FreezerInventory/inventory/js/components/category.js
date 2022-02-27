Vue.component('Item',{
    props: {
        item:{
            type: Item,
            required: true
        }
    }
})

// radio function
// new Vue({
//     el: '#app',
//     vuetify: new Vuetify(),
//     data () {
//         return {
//             column: null,
//             row: null,
//         }
//     },
// })
//
// new Vue({
//     el: '#app',
//     vuetify: new Vuetify(),
//     data: vm => ({
//         date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
//         dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
//         menu1: false,
//         menu2: false,
//     }),
//
//     computed: {
//         computedDateFormatted () {
//             return this.formatDate(this.date)
//         },
//     },
//
//     watch: {
//         date (val) {
//             this.dateFormatted = this.formatDate(this.date)
//         },
//     },
//
//     methods: {
//         formatDate (date) {
//             if (!date) return null
//
//             const [year, month, day] = date.split('-')
//             return `${month}/${day}/${year}`
//         },
//         parseDate (date) {
//             if (!date) return null
//
//             const [month, day, year] = date.split('/')
//             return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
//         },
//     },
// })