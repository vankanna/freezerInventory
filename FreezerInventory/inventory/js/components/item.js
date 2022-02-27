Vue.component('Item', {
    props: {
        item: {
            type: Item,
            required: true,
        },
        index: {

        }
    },

    data(){
        return {
            category: ['Meat', 'vegetable', 'fruit','snack'],
            inventory: this.quantity
        }
    },

    methods: {
        setCategory: function(category) {
            this.item.category = category;
        },
        addInventory: function() {
            this.item.quantity +=1;
        },
        subtractInventory: function() {
            if(this.item.quantity > 0) {
                this.item.quantity -= 1;
            }
        },
        editItem: function(){
            this.item.editing = true;
        },
        saveItem: function(){
            this.item.editing = false;
        },
        deleteItem(){
            console.log(this.id);
            this.$emit('delete-item', this.item.id);
        }

    },

    template: `
        <v-flex>
            <v-card class="item" min-width="250px" >
                <v-card-text>
                <div>{{item.category}}</div>
                <p class="text-h4 text--primary">{{item.name}}</p>
                <div class="d-flex justify-space-between">Expiration Date
                    <span class="d-flex justify-space-between">Quantity</span>
                </div>
                <div class="d-flex justify-space-between text-h6 text--primary">{{item.expiration}} <span class="d-flex justify-space-between text-h6">
                <v-card-actions class="justify-end">
                    <v-btn x-small @click="subtractInventory()" outlined>
                        <v-icon dark>mdi-minus</v-icon>
                    </v-btn>
                    <v-btn x-small @click="addInventory()" outlined>
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </v-card-actions>{{item.quantity}}</span></div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn text>Edit</v-btn>
                    <v-btn color="error" @click="deleteItem()" text>Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    `,

});
