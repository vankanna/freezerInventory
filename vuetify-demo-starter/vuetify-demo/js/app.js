// adds Vuetify functionality to your Vue app
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
            	// modify themes (light or dark) on the fly
                light: {
                    primary: '#ffcc00'
                }
            }
        }
    }),
    data: {
        drawer: false,
        menuItems: [
            {icon: 'notes', text: 'Notes'},
            {icon: 'archive', text: 'Archive'},
            {icon: 'delete', text: 'Trash'},
            {divider: true},
            {icon: 'settings', text: 'Settings'},
            {icon: 'help', text: 'Help'},
            {icon: 'info', text: 'About'},
        ],
        notes: [
            //new Note("Lorem ipsum 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium sit amet lacus eu consectetur. Suspendisse vitae quam vitae mi laoreet pellentesque id id diam. Sed tempus gravida quam, et varius ex aliquam et.", "blue"),
            //new Note("Lorem ipsum 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium sit amet lacus eu consectetur. Suspendisse vitae quam vitae mi laoreet pellentesque id id diam. Sed tempus gravida quam, et varius ex aliquam et.", "green"),
            //new Note("Lorem ipsum 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium sit amet lacus eu consectetur. Suspendisse vitae quam vitae mi laoreet pellentesque id id diam. Sed tempus gravida quam, et varius ex aliquam et.", "red"),
        ],
        searching: false,
        searchTerm: '',
        snackbarDisplay: false,
        snackbarTimeout: 3000,
        showStatus: STATUS.POSTED
    },
    methods: {
        navigate: function(item){
            switch(item.text){
                case "Notes":
                    this.showStatus = STATUS.POSTED;
                    break;
                case "Archive":
                    this.showStatus = STATUS.ARCHIVED;
                    break;
                case "Trash":
                    this.showStatus = STATUS.TRASHED;
                    break;
                default:
                    this.snackbarDisplay = true; // show snackbar
                    break;
            }

            // close drawer
            this.drawer = false;
        },

        addNote: function(){
            this.notes.unshift(new Note());
        },

        duplicateNote: function(note){
            this.notes.splice(this.notes.indexOf(note), 0, Object.assign(new Note(), note));
        }
    },

    computed: {
        filteredNotes: function(){
            let keyword = this.searchTerm.toLowerCase();
            let status = this.showStatus;
            if(keyword){
                return this.notes.filter(function(note){
                    return note.status === status && (note.title.toLowerCase().search(keyword) >= 0 || note.text.toLowerCase().search(keyword) >= 0);
                });
            }else{
                return this.notes.filter(function(note){
                    return note.status === status;
                });
            }
        }
    },

});
