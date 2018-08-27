import React from "react";
import ReactDom from "react-dom"

export default class Components extends React.Component {
  constructor() {
    super ()
    this.state = {
      CommentList: [
        { id: 1, user: '张三', content: '哈哈，沙发' },
        { id: 2, user: '李四', content: '哈哈，板凳' },
        { id: 3, user: '王五', content: '哈哈，凉席' },
        { id: 4, user: '赵六', content: '哈哈，砖头' },
        { id: 5, user: '田七', content: '哈哈，楼下山炮' }
    ]
    }
  }

  render () {
    return <div><h1>这是个列表</h1> 
      {this.state.CommentList.map(item => <div {...item} key={item.id}><h3>评论人:{item.user}</h3><p>评论内容:{item.content}</p></div>)} 
    </div>  
  }
}
