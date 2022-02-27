Vue.component('AppNav',{
    props: {
        menuItems: {
            type: Array,
            required: true,
        },
        drawer: {
            type: Boolean,
            default: {open:true},
        },
        <!-- another method-->
        navigate: {
            type: Function,
            required: true,
        },

    },

    template:
        `<v-navigation-drawer app disable-resize-watcher hide-verlay v-model="drawer.open">
            <v-list>
                <template v-for="item in menuItems">
                    <v-divider v-if="item.divider" class="my-3"></v-divider>

<!--                    <v-list-item v-else @click="$emit('navigate', item)">-->
                    <v-list-item v-edlse @click="navigate(item)">
               
                    <v-list-item-icon v-if="item.icon">
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content v-if="item.text">
                        <v-list-item-title>{{item.text}}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                 </template>
            </v-list>
            <v-btn color="primary" @click="drawer.open=false">Close</v-btn>
        </v-navigation-drawer>`
})