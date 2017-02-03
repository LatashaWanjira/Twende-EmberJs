import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            drivers: this.store.findAll('drivers'),
            passengers: this.store.findAll('passenger')
        });
    },

    actions: {
        // saveDriver(params) {
        //     var newDriver = this.store.createRecord('drivers', params);
        //     newDriver.save();
        //     this.transitionTo('for-drivers');
        // }
    }
});
