'use strict';
import {parseContainers} from "../util/outputParser";

const util = require('util');
const exec = util.promisify(require('child_process').exec);
import {Table} from 'console-table-printer';
import cmd from "../config/cmd";
class Containers {
    async execute() {
        const { stdout, stderr } = await exec(cmd.containers);
        if(stderr) {
            console.error(stderr);
        }else {
            const table = new Table();
            const rows = parseContainers(stdout);
            table.addRows(rows);
            table.printTable();
            return rows;
        }

    }
}

export default Containers