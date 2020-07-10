const Inquirer = require('Inquirer')

const fun = async function () {
    const { repo } = await Inquirer.prompt({
        name: 'repo',
        type: 'list',
        message: 'please choice repo template to create project',
        choices: [{
            type: 'input',
            message: '设置一个用户名:',
            name: 'name',
            default: "test_user" // 默认值
        }], // 选择模式
    });
    console.log(repo);
    
}

fun()