import DS from 'ember-data';

export default DS.Model.extend({
    name:DS.attr('string'),
    descriptif:DS.attr('string'),
    startDate:DS.attr('utc'),
    dueDate:DS.attr('utc'),
    owner:DS.belongsTo('developers')
});
