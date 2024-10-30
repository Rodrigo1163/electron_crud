import { Menu, Tray, nativeImage, BrowserWindow} from 'electron';
import path from 'node:path';

export function createTray(windows: BrowserWindow) {
    const appIcon = path.join(__dirname, "resources", "menuTemplate.png");
    let icon = nativeImage.createFromPath(appIcon);

    const tray = new Tray(icon);
    const manu = Menu.buildFromTemplate([
        { label: "Dev clientes", enabled: false},
        {type: "separator"},
        {
            label: "Cadastrar cliente",
            click: () => {
                // enviar mensagem do processo (main) para o processo frontend (renderer)
                windows.webContents.send("new-customer");
            }
        },
        {
            label: "Abrir", 
            click: () => {
                windows.show();
            }
        },
        {type: "separator"},
        {
            label: "Sair",
            role: "quit"
        }
    ])
    tray.setToolTip("Dev Clientes");
    tray.setContextMenu(manu);
}