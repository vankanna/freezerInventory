
function Item(title, category, expiration, quantity) {
    this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.name = title || 'Name';
    this.category = category || 'Other';
    this.expiration = expiration || 'MM/DD/YYYY'
    this.quantity = quantity || 0;
    this.editing = false;

}
