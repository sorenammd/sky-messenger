const authService = require('./authService');
const { randomHash } = require('../../services/hash'); console
const token = require('../../services/token');
exports.register = async (req, res) => {
    const newUserData = req.body;
    newUserData.hash = randomHash();
    const newUser = await authService.register(newUserData);
    if (newUser) {
        return res.send({
            success: true,
            message: 'ثبت نام شما با موفقیت انجام شد'
        });
    }
    return res.status(422).send({
        success: false,
        message: 'خطایی در فرآیند ثبت نام رخ داده است'
    });
};

exports.login = async (req, res) => {

    const userCredentials = req.body;
    const loginResult = await authService.login(userCredentials.email, userCredentials.password);
    if (loginResult === false) {
        return res.status(400).send(
            {
                success: false,
                message: 'کاربری با این مشخصات در سیستم یافت نشد'
            }
        );
    }
    return res.send(
        {
            success: true,
            token: token.sign({
                uid: loginResult.hash
            })
        }
    );


};