import DS from 'ember-data';

export default DS.Model.extend({
    identity:DS.attr('string'),
    projects:DS.hasMany('projects',{inverse:'owner'})
});
