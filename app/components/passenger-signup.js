import Ember from 'ember';

export default Ember.Component.extend({
    addNewPassenger: false,
    actions: {
        passengerFormShow() {
            this.set('addNewPassenger', true);
           
        },

        savePassenger1() {
            var params = {
                name: this.get('name'),
                residence: this.get('residence'),
                route: this.get('route'),
                driver: this.get('drivers')               
                    
            };

            this.setProperties({
                name: '',
                residence: '',
                route: ''
            });            
            this.set('addNewPassenger', false);
            this.sendAction('savePassenger2', params);
        }
    }
});

