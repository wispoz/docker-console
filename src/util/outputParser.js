const parseContainers = (output) => {
    let out = output.replace(/  +/g, '#');
    return out.split("\n")
        .filter(String)
        .slice(1, out.length)
        .map((row, index) => {
            return Object.assign({index}, Object.values(row.split('#')));
        });
};


export {
    parseContainers
}