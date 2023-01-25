const express = require("express");
const router = express.Router();
const Order =require("../Models/Orders");

router.post("/orderData", async (req, res) => {
    let data = req.body.order_data;

     data.splice(0, 0, {Order_date: req.body.order_date});

    // if email not existing in db then create else : InsertMany();

    let emailId = await Order.findOne({'email' : req.body.email });
    // console.log(emailId);

    if(emailId === null ){
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({success : true});
            })
        } catch (error) {
            res.send("Server Error", error.message);
        }
    }
    else {
        try {
            await Order.findOneAndUpdate({email: req.body.email },
            {$push : {order_data: data}}).then(() => {
                res.json({success : true});
            })
        } catch (error) {
            res.send("Server Error", error.message);        
        }
    }
})

router.post("/myOrderData", async (req, res) => {
    try {
        let OrderDetail = await Order.findOne({email: req.body.email});
        let order_data = OrderDetail.order_data;
        console.log(order_data)
        // let eachItem = order_data.
        res.json({oData : order_data})
    } catch (error) {
        res.send("Error", error.message);
    }
})

module.exports = router;