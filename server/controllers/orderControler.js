

const con = require("../config/dbConnectionSQL");
// let hitcount = 1
const createOrder = async (req, res) => {
      // console.log("Body is ", req.body);
      // console.log("-----",hitcount)   
      // hitcount=hitcount+1;
      let arr =  req.body
      arr = JSON.stringify(arr)
      
        const query =`INSERT INTO mytable (JsonData) VALUES ('${arr}');`;
        // console.log(query)
        await con.query(query, (err, rows) => {
            if(!err){
                 res.status(201).send("Okay")
                }
            else{ 
                console.log('Error')
            }
           
          }
        );
      
    };

    const getAllOrders = async (req, res) => {
      await con.query("select * from mytable", (err, rows) => {
        console.log(rows)
        res.status(200).send(rows);
      });
    };

module.exports = {createOrder,getAllOrders} 