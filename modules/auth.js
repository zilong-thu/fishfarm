/*
 *
 */
// 验证用户信息
var auth = {};

auth.requiredAuthentication = function(req, res, next) {
    if (req.session.username) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}

module.exports = auth;
