import Route from '@ember/routing/route';

const Services=EmberObject.extend() {
  services:[],
  countActive:computed('services.@each.active',function(){

  })
}

export default Route.extend({
});
