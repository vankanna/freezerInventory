Vue.component('CategorySelect',{
    props: {
        value: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            categories: ['Meat', 'Vegetable', 'Fruit', 'Snack', 'Other'],
        }
    },

    computed: {
        category: {
            get() {return this.value},
            set(category) { this.$emit('input', category)}
        }
    },

    template:
        `
          <v-select v-model="category"
          :items="categories"
          label="Category"
        ></v-select>
        
        `
})