import UserService from "../Services/user.service.js";
class UserController {
    getAll(req, res) {
        UserService.getAll().then((result) => {
            res.send(result);
        });
    }
    getUserById(req, res) {
        let id = req.body.id; // ШЛЕТ UNDEFINED 
        console.log(req);
        UserService.getUserById(id).then((result) => {
            res.send(result);
        });
    }
}
export default new UserController;
