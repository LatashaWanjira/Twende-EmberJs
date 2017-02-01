import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('driver');
    },

    actions: {
        // saveDriver(params) {
        //     var newDriver = this.store.createRecord('drivers', params);
        //     newDriver.save();
        //     this.transitionTo('for-drivers');
        // }
    }
});
