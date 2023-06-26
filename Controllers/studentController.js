const student=require("../Models/student")
const multer=require("multer")

const StudentData = async (req, res) => {
    try {
        let data = req.body
        let files = req.files

        //data = JSON.parse(JSON.stringify(data));
    
        let { fname, lname,birth, email, raddress,paddress,UploadDoc } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "Please enter some data in request body" })
       if (!fname) return res.status(400).send({ status: false, message: "fname is required" })
        if (!lname) return res.status(400).send({ status: false, message: "lname is required" })
        if (!birth) return res.status(400).send({ status: false, message: "Date of birth is required" })
        if (!email) return res.status(400).send({ status: false, message: "email is required" })
        if (!raddress) return res.status(400).send({ status: false, message: "Residential address is required" })

        if (typeof raddress  !== "object") return res.status(400).send({ status: false, message: "raddress should be an object" })
        if (!raddress.hasOwnProperty("street1")) return res.status(400).send({ status: false, message: "raddress street1 is required " })
        if (!raddress.hasOwnProperty("street2")) return res.status(400).send({ status: false, message: "raddress stree2 is required " })
        
        if (typeof paddress !== "object") return res.status(400).send({ status: false, message: "paddress should be an object" })
        if (!paddress.hasOwnProperty("street1")) return res.status(400).send({ status: false, message: "paddress street1 is required " })
        if (!paddress.hasOwnProperty("street2")) return res.status(400).send({ status: false, message: "paddress street2 is required " })
        
        
        data.raddress = raddress
        data.paddress = paddress

        let findEmail = await userModel.findOne({ email: email })
        if (findEmail) return res.status(400).send({ status: false, message: "Email already exist" })
        
        if (typeof UploadDoc  !== "object") return res.status(400).send({ status: false, message: "UploadDoc should be an object" })
        if (!UploadDoc.hasOwnProperty("fileName")) return res.status(400).send({ status: false, message: "fileName is required " })
        if (!UploadDoc.hasOwnProperty("typeOf")) return res.status(400).send({ status: false, message: "typeOf is required " })
        if (!UploadDoc.hasOwnProperty("upload")) return res.status(400).send({ status: false, message: "upload file is required " })
        const uploadStorage = multer({ storage: storage })
        //console.log(uploadStorage)
        data.UploadDoc.upload=uploadStorage
        const creatStudent = await student.create(data)
        return res.status(201).send({ status: true, message: "submit form Successfully", data: creatStudent })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }



}

module.exports={StudentData}