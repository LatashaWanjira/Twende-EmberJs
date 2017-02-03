import Ember from 'ember';

export default Ember.Route.extend({
      model(passengers) {
        return this.store.findRecord('drivers', passengers.driver_id);
      },

      actions: {
        savePassenger3(params) {
          var newPassenger = this.store.createRecord('passenger', params);
          var driver = params.driver;
          driver.get('passengers').addObject(newPassenger);
          newPassenger.save().then(function(){
              return driver.save();
          });
          this.transitionTo('passengers');
        }
      }
});


