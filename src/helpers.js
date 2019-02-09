const yaml = require('js-yaml');
const fs = require('fs');

const writeToYaml = (filePath, data) => fs.writeFileSync(filePath, yaml.safeDump(data));

const insertYamlValue = (filePath, key, value) => {

    const data = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));

    replaceKeys(data, key, value);

    writeToYaml(filePath, data)
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
                    if (value) {
                        obj[ele] = value;
                    } else {
                        delete obj[ele];
                    }
                }
            }
        }
    });
};


module.exports = {
    insertYamlValue,
    replaceKeys
}