

const con = require("../config/dbConnectionSQL");

const createOrder = async (req, res) => {
      console.log("Body is ", req.body);
      const { order_ids } = req.body;   
      

    
        await con.query(
          `INSERT INTO orders (order_ids) VALUES ('${order_ids}')`,
          (err, rows) => {
            if(!err){
                 res.status(200).send("Okay")
                }
            else{ 
                console.log('Error')
            }
           
          }
        );

        // res.status(200).send("Okay")
      
    };

module.exports = {createOrder} 