/**
 * ISSUE
 *
 * (EN) The interface fields are not checked because we import .js (as I understood), which does't support typescript interfaces.
 * If I type "result[0].blablabla" the compiler will not find an error. But in fact it should find an error.
 * In any case I specified the type of the variable "result" (***ISSUE) because it is according to the rules of typescript.
 *
 * (RU) Поля интерфейса не проверяются, потому что используется импорт .js (как я понял), который не поддерживает интерфейсы typescript.
 * Если я напечатаю "result[0].blablabla", компилятор не обнаружит ошибку. Но на самом деле он должен.
 * В любом случае, я указал тип переменной "result", потому что это соответствует правилам typescript.
 */
import { UserRepository } from "../Repositories/user.repository.js";
export class UserService {
    async getAll() {
        const ur = new UserRepository;
        try {
            let testVariable;
            await ur.getAll().then((result) => {
                testVariable = result; // ***ISSUE
            });
            return testVariable;
        }
        catch (e) {
            return e;
        }
    }
}
