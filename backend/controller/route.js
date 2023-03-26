var express = require('express')
var router = express.Router()
var productschema = require('../model/productschema')
 
router.post("/batteryon", async(req, res) => {
    const data = new productschema({
        Batterystatus:"ON",
        BatteryField:1
    })
    await data.save({timestamps: { createdAt: true, updatedAt: false } });
    res.json(data);
});

router.post("/batteryoff", async(req, res) => {
    const data = new productschema({
        Batterystatus:"OFF",
        BatteryField:0
    })
    await data.save({timestamps: { createdAt: true, updatedAt: false } });
    res.json(data);
});



router.post("/simulatoron", async(req, res) => {
    const data = new productschema({
        Simulatorstatus:"ON",
        SimulatorField:1
    })
    await data.save({timestamps: { createdAt: true, updatedAt: false } });
    res.json(data);
});




router.post("/simulatoroff", async(req, res) => {
    const data = new productschema({
        Simulatorstatus:"OFF",
        SimulatorField:0
    })
    await data.save({timestamps: { createdAt: true, updatedAt: false } });
    res.json(data);
});

router.get('/:id', (req, res) => {
    productschema.findById(req.params.id,(err, data) => {
       if (err) throw err;
        res.json(data);
    })

})

module.exports = router;