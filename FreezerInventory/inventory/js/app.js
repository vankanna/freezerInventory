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
            new Item("Ice Cream", "Other","02/12/2024",4),
            new Item("Pork", "Meat","02/12/2024",4),
            new Item("Jacks Pepperoni Pizza", "Other","02/12/2024",6),
            new Item("Grass Fed Top Sirloin Steak", "Meat", "02/12/2024", 10),
            new Item("Ice", "Other","02/12/2024",1),
            new Item("Beef", "Meat","02/12/2024",1),
            new Item("Top Sirloin Steak", "Meat", "NA", 10),

        ],
        itemToEdit: false,
        searching: false,
        category: '',
    },
    methods: {

        addItem: function(){
            this.items.unshift(new Item());
        },
        editItem: function (id){
            const index = this.items.findIndex(i => i.id === id)
            this.itemToEdit = this.items[index]
        },
        deleteItem: function(id){
            const index = this.items.findIndex(i => i.id === id)
            this.items.splice(index,1)
        },
        reset: function(){
            this.itemToEdit = null;
        },
    },

    computed: {
        filteredItems: function(){
            let category = this.category;
            if(category && this.searching){
                return this.items.filter(function(item){
                    return (item.category.search(category) >= 0);
                });
            }else{
                return this.items.filter(function(item){
                    return item;
                });
            }
        }
    },

});
