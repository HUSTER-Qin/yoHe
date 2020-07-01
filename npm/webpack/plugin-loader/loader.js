const hljs = require('./highlight');
const MarkdownIt = require('./markdown-it');

const wrapper = content => `
<template>
<div>
<section v-html="content"></section>
</div>
  
</template>
<script>
export default {
  created() {
    this.content = unescape(\`${escape(content)}\`);
  }
};
</script>
`;

const highlight = (str, lang) => lang && hljs.getLanguage(lang) ? hljs.highlight(lang, str, true).value : '';
const parser = new MarkdownIt({
  html: true,
  highlight
});

// 导出一个函数
module.exports = function(source, options) {
  this.cacheable && this.cacheable();
  options = {
    wrapper,
    ...options
  };
  let x = options.wrapper(parser.render(source))
  return x;
}