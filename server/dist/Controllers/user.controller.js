import { UserService } from "../Services/user.service.js";
export class UserController {
    getAll(req, res) {
        const us = new UserService;
        us.getAll().then((result) => {
            res.send(result);
        });
    }
}
