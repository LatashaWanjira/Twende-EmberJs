import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    residence: DS.attr(),
    route: DS.attr(),
    time: DS.attr(),
    car: DS.attr(),
    registration: DS.attr(),
    picture: DS.attr(),
    space: DS.attr(),
    passengers: DS.hasMany('passenger', {async: true})
});
