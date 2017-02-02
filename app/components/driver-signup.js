import Ember from 'ember';

export default Ember.Component.extend({
    addNewDriver: false,
    actions: {
        driverFormShow() {
            this.set('addNewDriver', true);
           
        },

        saveDriver() {
            var params = {
                name: this.get('name'),
                residence: this.get('residence'),
                route: this.get('route'),
                time: this.get('time'),
                car: this.get('car'),
                registration: this.get('registration'),
                space: this.get('space')
            };
            
            this.set('addNewDriver', false);
            this.sendAction('saveDriver', params);
        }
    }
});