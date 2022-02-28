Vue.component('EditItem',{
    props: {
        item: {
            type: Item,
            required: true,
        },
        overlay: {
            type: Boolean,
            required: true,
        }
    },

    data(){
        return {
            absolute: true,
            overlay: this.overlay,
        }
    },

    methods: {
        reset: function(){
            this.$emit('reset');
        },
    },

    template:
        `
        <v-overlay
          :absolute="absolute"
          :value="overlay"
        >
        <v-flex>
            <v-card class="item-overlay" min-width="250px" >
                <div>{{item.category}}</div>
                <p class="text-h4 text--primary">{{item.name}}</p>
            </v-card>
        </v-flex>
          <v-btn
            color="success"
            @click="overlay = false"
          >
            Hide Overlay
          </v-btn>
        </v-overlay>
        
        `
})