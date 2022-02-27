Vue.component('Note', {
    props: {
        note: {
            type: Note,
            required: true,
        },
    },

    data(){
      return {
          colors: ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple', 'pink'],
          pickingColor: false,
      }
    },

    methods: {
        setColor: function(color){
            this.note.color = color;
            this.pickingColor = false;
        },

        editNote: function(){
            this.note.editing = true;
        },

        saveNote: function(){
            this.note.editing = false;
        },

        archiveNote: function(){
            this.note.status = STATUS.ARCHIVED;
            this.saveNote();
        },

        trashNote: function(){
            this.note.status = STATUS.TRASHED;
            this.saveNote();
        },

        restoreNote: function(){
            this.note.status = STATUS.POSTED;
            this.saveNote();
        },

        duplicateNote: function(){
            this.$emit('duplicate', this.note);
        }
    },

    template: `
        <v-flex class="note">
            <v-hover>
                <v-card :color="note.color" class="lighten-2" hover raised slot-scope="{hover}">
                    <!-- NOTE TITLE -->
                    <v-card-title>
                        <h3 v-show="!note.editing">{{note.title}}</h3>
                        <v-text-field v-if="note.editing" v-model="note.title" placeholder="Title"
                                      solo full-width hide-details text></v-text-field>
                    </v-card-title>
                    <!-- NOTE TEXT -->
                    <v-card-text>
                        <p v-show="!note.editing">{{note.text}}</p>
                        <v-textarea v-if="note.editing" placeholder="Notes" v-model="note.text"
                                    solo full-width hide-details text></v-textarea>
                    </v-card-text>

                    <div class="card-action-holder">
                        <!-- SAVE / ARCHIVE / TRASH BUTTONS -->
                        <v-card-actions v-show="note.editing">
                            <!-- ARCHIVE / UNARCHIVE -->
                            <v-btn v-if="!note.archived()" text icon color="black" small
                                   @click="archiveNote">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">archive</v-icon>
                                    </template>
                                    <span>Archive</span>
                                </v-tooltip>
                            </v-btn>
                            <v-btn v-if="note.archived()" text icon color="black" small
                                   @click="restoreNote">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">unarchive</v-icon>
                                    </template>
                                    <span>Unarchive</span>
                                </v-tooltip>
                            </v-btn>

                            <!-- TRASH / RESTORE -->
                            <v-btn v-if="!note.trashed()" text icon color="black" small
                                   @click="trashNote">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">delete</v-icon>
                                    </template>
                                    <span>Trash</span>
                                </v-tooltip>
                            </v-btn>
                            <v-btn v-if="note.trashed()" text icon color="black" small
                                   @click="restoreNote">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">restore_from_trash</v-icon>
                                    </template>
                                    <span>Restore</span>
                                </v-tooltip>
                            </v-btn>

                            <!-- SPACER -->
                            <v-spacer></v-spacer>

                            <!-- SAVE -->
                            <v-btn text icon color="black" small @click="saveNote">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">save</v-icon>
                                    </template>
                                    <span>Save</span>
                                </v-tooltip>
                            </v-btn>

                        </v-card-actions>

                        <!-- EDIT / COLOR/ DUPLICATE BUTTONS -->
                        <v-card-actions v-show="hover || pickingColor">
                            <v-spacer></v-spacer>

                            <!-- DUPLICATE -->
                            <v-btn text icon color="black" small @click="duplicateNote">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">add_to_photos</v-icon>
                                    </template>
                                    <span>Duplicate</span>
                                </v-tooltip>
                            </v-btn>

                            <!-- COLOR CHOOSER -->
                            <v-menu left v-model="pickingColor">
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" text icon color="black" small>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on }">
                                                 <v-icon v-on="on">palette</v-icon>
                                            </template>
                                            <span>Choose Color</span>
                                        </v-tooltip>
                                    </v-btn>
                                </template>

                                <v-list class="color-chooser">
                                    <v-list-item v-for="(color, i) in colors" :key="i"
                                                 :color="color" class="accent-1"
                                                 @click="setColor(color)">
                                        <v-list-item-title>
                                            <v-icon :color="color">brightness_1</v-icon>
                                        </v-list-item-title>
                                    </v-list-item>

<!--                                Another options      -->
<!--                                    <v-color-picker-->
<!--                                            dot-size="25"-->
<!--                                            show-swatches-->
<!--                                            hide-canvas-->
<!--                                            hide-sliders-->
<!--                                            hide-inputs-->
<!--                                            swatches-max-height="200"-->
<!--                                            v-model="note.color"-->
<!--                                    ></v-color-picker>-->
                                </v-list>
                            </v-menu>

                            <!-- EDIT -->
                            <v-btn text icon color="black" small @click="editNote">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">edit</v-icon>
                                    </template>
                                    <span>Edit</span>
                                </v-tooltip>
                            </v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-hover>
        </v-flex>
    `

});
