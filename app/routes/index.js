import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            drivers: this.store.findAll('drivers'),
            passengers: this.store.findAll('passenger')
        });
    },

    actions: {
    }
});
