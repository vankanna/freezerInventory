const STATUS = {POSTED: '', ARCHIVED: 'archive', TRASHED: 'trash'};

function Note(title, text, color) {
    this.title = title || '';
    this.text = text || '';
    this.color = color || 'yellow';
    this.editing = false;
    this.status = STATUS.POSTED;

    this.archived = function(){
        return this.status === STATUS.ARCHIVED;
    };

    this.trashed = function(){
        return this.status === STATUS.TRASHED;
    };
}
