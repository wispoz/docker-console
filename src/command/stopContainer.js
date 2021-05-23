const inquirer = require('inquirer');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
import colors  from 'colors/safe';
class StopContainer {

    constructor(containersCommand) {
        this.containersCommand = containersCommand;
    }
    async execute() {
       const rows = await (new this.containersCommand).execute();
       await  inquirer.prompt([
            {
                type: 'input',
                name: 'type',
                message: 'Индекс контейнера',
            },
        ]).then(async (answers) => {
           const {type} = answers;
           if(type !== '') {
               const containers = rows.filter(container=>container.index === parseInt(type));
               if(containers && containers.length) {
                   const containerData = containers[0],
                         containerId = containerData['0'];
                   const { stdout, stderr } = await exec(`docker container stop ${containerId}`);
                   if(stderr) {
                    console.error(stderr);
                   }else {
                     console.log(colors.green(`Контейнер ${stdout} остановлен`))
                   }

               }
           }
        });

     //   const { stdout, stderr } = await exec(`docker container stop ${this.containerId}`);
     //   console.log(stdout);
    }
}
export default StopContainer;
