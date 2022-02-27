
function Item(title, category, expiration, quantity) {
    this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.name = title || 'Title';
    this.category = category || 'uncategorized';
    this.expiration = expiration || 'NA'
    this.quantity = quantity || 0;
    this.editing = false;

}
