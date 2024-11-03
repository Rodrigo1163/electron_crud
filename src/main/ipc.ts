import { app, ipcMain} from 'electron';

ipcMain.handle("fetch-users", () => {
    console.log("buscando usuarios");

    return [
        {id: 1, nome: "Rodrigo"},
        {id: 2, nome: "João"},
        {id: 3, nome: "Lucas"}
    ]
})

ipcMain.handle("get-version", () => {
    return app.getVersion();
})