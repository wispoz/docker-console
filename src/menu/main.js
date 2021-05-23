'use strict';
import Images from "../command/images";
const inquirer = require('inquirer');
import command from "../command/command";
import Containers from "../command/containers";
import Menu from "./menu";
import StopContainer from "../command/stopContainer";
import CreateDockerCompose from "../command/createDockerCompose";

const Main = async () => {
    return await inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Что вы хотите',
            choices: [
                {
                    name: 'Список образов',
                    value: Images
                },
                {
                    name: 'Список запущенных контейнеров',
                    value: Containers
                },
                {
                    name: 'Остановить контейнер',
                    value: StopContainer.bind(null,Containers)
                },
                {
                    name: 'Создать docker-compose.yml',
                    value: CreateDockerCompose
                },
                {
                    name: 'Выход',
                    value: null
                },
            ],
        },
    ]).then(async (answers) => {
        if(answers.type) {
            await command(answers.type);
            await Menu(Main);
        }

    });
}
export default Main;