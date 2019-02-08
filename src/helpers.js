const yaml = require('js-yaml');
const fs = require('fs');

const writeToYaml = (path, data) => fs.writeFileSync(path, yaml.safeDump(data));


const insertYamlValue = (basePath, key, value) => {

    const data = yaml.safeLoad(fs.readFileSync(basePath, 'utf8'));

    replaceKeys(data, key, value);

    writeToYaml(basePath, data)
}

const replaceKeys = (obj, key, value) => {
    if (!obj) {
        return;
    }

    Object.keys(obj).forEach((ele) => {
        if (obj.hasOwnProperty(ele)) {
            if (typeof obj[ele] === 'object') {
                replaceKeys(obj[ele], key, value);
            } else if (typeof obj[ele] === 'string') {
                if (ele === key) {
                    obj[ele] = value;
                }
            }
        }
    });
};


module.exports = {
    insertYamlValue
}