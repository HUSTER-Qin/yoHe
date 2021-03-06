const program = require('commander');
const path = require('path')

const { version } = require('./utils/constants');

// Which package manager would you ❤️  to use?
// Installation in progress... ☕
const actionsMap = {
    create: { // 创建模板
        description: 'create project',
        alias: 'cr',
        examples: [
            'yohe-cli create <template-name>',
        ],
    },
    config: { // 配置配置文件
        description: 'config info ',
        alias: 'c',
        examples: [
            'yohe-cli config get <k>',
            'yohe-cli config set <k> <v>',
        ],
    },
    
    '*': {
        alias: '',
        description: 'command not found',
        examples: []
    },
};
// 循环创建命令
Object.keys(actionsMap).forEach((action) => {
    program
        .command(action) // 命令的名称
        .alias(actionsMap[action].alias) // 命令的别名
        .description(actionsMap[action].description) // 命令的描述
        .action(() => { // 动作
            if (action === '*') { // 如果动作没匹配到说明输入有误
                console.log(actionsMap[action].description);
            } else { // 引用对应的动作文件 将参数传入
                debugger
                require(path.resolve(__dirname, action))(...process.argv.slice(3));
            }
        });
});

program.on('--help', () => {

    console.log('Examples');
    Object.keys(actionsMap).forEach((action) => {
        (actionsMap[action].examples || []).forEach((example) => {
            console.log(`  ${example}`);
        });
    });
});
program.version(version)
    .parse(process.argv);