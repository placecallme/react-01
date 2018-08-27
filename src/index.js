import React from 'react'
import ReactDom from 'react-dom'
import Componets from'./componets/评论列表的练习'
/**
 * 父类
 */
// class Proen  {
//     constructor (name,age) {
//         this.name=name
//         this.age=age
//     }   
// }

// class Father extends Proen {
//     constructor (name,age) {
//         super(name,age)
//     }
// }

// const a1 = new Father('zs',12)

// console.log(a1);

class Hellow extends React.Component {
   render () {
       return (
           <div>
               class的组件
           </div>
       ) 
   }
}

ReactDom.render(<div>
    123
    <Componets></Componets>
    <Hellow></Hellow>
    </div>,document.querySelector('#app'))

