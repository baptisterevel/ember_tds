import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';

let Services=EmberObject.extend({
  services:[],
  countActive:computed('services.@each.active',function(){
    let activeServices=this.get('services').filter(
      service=>service.active
    );
    return activeServices.length;
  }),
  sumActive: computed('services.@each.active',function(){
    let total = 0;
    this.get('services').forEach(service=>{
      if(service.active)
        total += service.price;
    });
    return total;
  })
});

export default Route.extend({
  model(){
    return Services.create({services:
        [
          {
            "name": "Web Development",
            "price": 300,
            "active":true
          },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
        ]
      });
  }
});
