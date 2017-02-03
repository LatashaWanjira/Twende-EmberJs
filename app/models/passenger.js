import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    residence: DS.attr(),
    route: DS.attr(),
    driver: DS.belongsTo('drivers', {async: true})

});
