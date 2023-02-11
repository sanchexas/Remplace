import {App} from "./app";

function main(){
    const app = new App(process.env.PORT);
    app.listen();
}

main();