Vue.component('NewItem',{
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
        <div>asdfasfd</div>
        
        `
})