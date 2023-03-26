var mongoose= require('mongoose')

var productschema =mongoose.Schema({
      Batterystatus:String,
      BatteryField:Number,
      Simulatorstatus:String,
      SimulatorField:Number,
      
},{ timestamps: true })

module.exports=mongoose.model('Productschema',productschema)