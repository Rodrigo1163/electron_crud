import { app, ipcMain} from 'electron'
import PouchDB from 'pouchdb'
import path from 'node:path'
import fs from 'node:fs'
import {Customer, NewCustomer} from '../shared/types/ipc';
import { randomUUID} from 'node:crypto'

let dbPath;
if(process.platform === "darwin") {
    dbPath = path.join(app.getPath("appData"), "devclientes", "my_db")
} else{
    dbPath = path.join(app.getPath("userData"), "my_db")
}

const dbDir = path.dirname(dbPath);

if(!fs.existsSync(dbDir)){
    fs.mkdirSync(dbDir, { recursive: true})
}

const db = new PouchDB<Customer>(dbPath);

async function addCustomer(doc: NewCustomer): Promise<PouchDB.Core.Response | void> {
    const id = randomUUID();

    const data: Customer = {
        ...doc,
        _id: id
    }

    return db.put(data)
            .then(response => response)
            .catch(err => console.error("ERRO AO CADASTRAR: ", err))
}

ipcMain.handle("add-customer", async (event, doc: Customer) => {
    const result = await addCustomer(doc);
    return result;
})

async function fetchAllCustomers(): Promise<Customer[]> {
    try {
        const result = await db.allDocs({include_docs: true});
        return result.rows.map(row => row.doc as Customer)
    } catch (error) {
        console.log('error ao buscar ', error);
        return []
    }
}

ipcMain.handle("fetch-all-customers", async () => {
    return await fetchAllCustomers();
})