import { DatabaseDriver } from './database-drivers/dbdriver.module.js';
import { ConsoleError } from './lib/ericchase/Utility/Console.js';
import { NodeRef } from './lib/ericchase/Web API/Node_Utility.js';

//                                                                          \\
//
// Postgres Queries

// const db_query = DatabaseDriver.getNeon(<insert a valid connection string>);
const db_query = DatabaseDriver.getLocalhost();

async function CreateTable(name: string): Promise<void> {
  const q = `
      CREATE TABLE ${name} (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL
      );
    `;
  await db_query(q, []);
}
async function TableExists(name: string): Promise<boolean> {
  const q = `
    SELECT EXISTS (
      SELECT 1 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = $1
    );
  `;
  const { exists } = (await db_query(q, [name]))[0];
  return exists ?? false;
}

//                                                                          \\

async function EnsureTableExists(name: string): Promise<boolean> {
  try {
    if ((await TableExists(name)) === true) {
      return true;
    } else {
      await CreateTable(name);
      return (await TableExists(name)) === true;
    }
  } catch (error) {
    ConsoleError(error);
  }
  return false;
}

//                                                                          \\

class Page {
  divMessages: HTMLDivElement;
  constructor() {
    this.divMessages = NodeRef(document.querySelector('#messages')).as(HTMLDivElement);
  }
  addMessage(text: string) {
    try {
      const div = document.createElement('div');
      const pre = document.createElement('pre');
      pre.textContent = text;
      div.appendChild(pre);
      this.divMessages.prepend(div);
      // scroll div into view
      div.scrollIntoView(false);
      return div;
    } catch (error) {
      ConsoleError(error);
    }
  }
}

const page = new Page();

const tableName = 'test';
if (await EnsureTableExists(tableName)) {
  page.addMessage('Table exists.');
} else {
  page.addMessage('Is server running?');
}
