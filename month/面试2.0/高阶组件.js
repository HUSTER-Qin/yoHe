// 高阶组件(HOC)应该是无副作用的纯函数，且不应该修改原组件,即原组件不能有变动
// 高阶组件(HOC)不关心你传递的数据(props)是什么，并且新生成组件不关心数据来源
// 高阶组件(HOC)接收到的 props 应该透传给被包装组件即直接将原组件prop传给包装组件
// 高阶组件完全可以添加、删除、修改 props


// 接受一个组件作为参数，返回一个组件的函数


// 一个转换大小写的 高阶 组件
const yell = (PassedComponent) =>
  ({ children, ...props }) =>
    <PassedComponent {...props}>
      {children.toUpperCase()}!
    </PassedComponent>

const Title = (props) => <h1>{props.children}</h1>
const AngryTitle = yell(Title)

 //示例： <AngryTitle>Whatever</AngryTitle>

//=> <h1>WHATEVER!</h1>