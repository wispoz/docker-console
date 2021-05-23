'use strict';
const command = async (type) => {
    const command  = new type();
    await command.execute.call(command,arguments);
}
export default command;