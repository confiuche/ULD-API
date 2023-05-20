//create new user
export const createAccount = async(req, res) => {
    const {surname,othername,email,staff_no} = req.body;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    try {
        res.json({
            status: "success",
            data: "Account created successfully"
        })
    } catch (error) {
        res.json(error.message)
    }
}