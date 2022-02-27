// adds Vuetify functionality to your Vue app
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
            	// modify themes (light or dark) on the fly
                light: {
                    primary: '#00BFFF'
                }
            }
        }
    }),
    data: {
        items: [
            new Item("Ice Cream", "other","02/12/2024",4),
            new Item("Pork", "Meat","02/12/2024",4),
            new Item("Jacks Pepperoni Pizza", "other","02/12/2024",6),
            new Item("Grass Fed Top Sirloin Steak", "other", "02/12/2024", 10),
            new Item("Ice", "other","02/12/2024",16787777),
            new Item("Grass Fed Top Sirloin Steak", "other", "NA", 10),

        ],
        searching: false,
        searchTerm: '',
    },
    methods: {

        addItem: function(){
            this.items.unshift(new Item());
        },
        deleteItem: function(id){
            const index = this.items.findIndex(i => i.id === id)
            this.items.splice(index,1)
        }
    },

    computed: {
        filteredItems: function(){
            let keyword = this.searchTerm.toLowerCase();
            if(keyword){
                return this.items.filter(function(item){
                    return (item.title.toLowerCase().search(keyword) >= 0 || item.text.toLowerCase().search(keyword) >= 0);
                });
            }else{
                return this.items.filter(function(item){
                    return item;
                });
            }
        }
    },

});
