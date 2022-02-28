Vue.component('EditItem',{
    props: {
        item: {
            type: Item,
            required: true,
        },
        overlay: {
            type: Object,
            required: true,
        }
    },

    data(){
        return {
            absolute: true,

        }
    },

    methods: {
        reset: function(){
            this.$emit('reset');
        },
    },

    template:
        `
        <v-overlay :dark="false"  :absolute="absolute" v-model="overlay.show" >
            <v-flex>
                <v-card  light class="item-overlay pa-6" min-width="250px" >
                     <category-select v-model="item.category"></category-select>
                     <v-text-field label="Name" v-model="item.name" light text-h4 solo full-width text></v-text-field>
                     <v-text-field label="Expiration Date" v-model="item.expiration" text-h4 solo full-width hide-details text></v-text-field>
                </v-card>
            </v-flex>
            <v-btn block  color="primary"  @click="overlay.show = false">
            Save
            </v-btn>
        </v-overlay>
        
        `
})
