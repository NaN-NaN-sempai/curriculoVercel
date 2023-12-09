const imports = import.meta.glob('./*.png');

const loadModules = async () => {
    const files = [];


    for (const path in imports) {
        const name = path.split('/').pop();//.replace('.png', '');

        console.log(path.split('/'));

        files.push(name);
    }

    return files;
}


export default await loadModules();