"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idGenerator = void 0;
function idGenerator(idUser) {
    return ('' + Date.now()) + ('' + idUser);
}
exports.idGenerator = idGenerator;
