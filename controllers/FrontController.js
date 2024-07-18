const UserModel = require('../models/user')
const bcrypt = require('bcrypt')



class FrontController {

    static home = async (req, res) => {
        try {
            res.render("home");
        } catch (error) {
            console.log(error);
        }
    }

    static about = async (req, res) => {
        try {
            res.render("about");
        } catch (error) {
            console.log(error);
        }
    }

    static service = async (req, res) => {
        try {
            res.render("service");
        } catch (error) {
            console.log(error);
        }
    }

    static contact = async (req, res) => {
        try {
            res.render("contact");
        } catch (error) {
            console.log(error);
        }
    }


    static blog = async (req, res) => {
        try {
            res.render("blog");
        } catch (error) {
            console.log(error);
        }
    }

    
    static hire = async (req, res) => {
        try {
            res.render("hire");
        } catch (error) {
            console.log(error);
        }
    }


    static login = async (req, res) => {
        try {
            res.render("login", { message: req.flash('success'), msg:req.flash('error') });
        } catch (error) {
            console.log(error);
        }
    }



    static register = async (req, res) => {
        try {
            res.render("register", { msg: req.flash('error') });
        } catch (error) {
            console.log(error);
        }
    }

    //registeration data insert

    static userinsert = async (req, res) => {
        try {
            // console.log(req.body);
            const { n, e, p, cp } = req.body
            const user = await UserModel.findOne({ email: e })
            //console.log(user)
            if (user) {
                req.flash('error', 'Email allready exist!')
                res.redirect('/register')
            } else {
                if (n && e && p && cp) {
                    if (p == cp) {
                        const hashpassword = await bcrypt.hash(p, 10)
                        const result = new UserModel({
                            name: e,
                            email: e,
                            password: hashpassword,
                        })
                        await result.save()
                        req.flash('success', 'Registration Successfully! Please Login..')
                        res.redirect('/')
                    } else {
                        req.flash('error', 'Password and Confirm Password is incorrect!')
                        res.redirect('/register')
                    }
                } else {
                   
                    res.redirect('/register')
                }
            }
        } catch (error) {
            console.log(error);
        }
    }


    // verifyLogin
    static verifyLogin = async (req, res) => {
        try {
        //    console.log(req.body)
        const {email, password} = req.body
        const user = await UserModel.findOne({email: email})
        if(user){
            const passwordMatch = await bcrypt.compare(password,user.password)
            //  console.log(passwordMatch)
            if(passwordMatch) {
                res.redirect('/home')
            } else {
                req.flash('error', 'Email and Password is incorrect')
                res.redirect('/')
            }
            res.redirect('/home')
        } else {
            req.flash('error', 'You are not Register User! Please Register')
            res.redirect('/')
        }
        } catch (error) {
            console.log(error);
        }
    }








}

module.exports = FrontController;