exports.register = (req, res, next) => {

    try {
        //code
        res.json({ message: "hello register" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error!!" });
    }

};

exports.login = (req, res, next)=>{
    try {
        console.log(aaa);
        res.json({message: "Hello Login"})

        
    } catch (error) {
        next(error);
        
    }



}