import React from 'react'
import ReactDom from 'react-dom'



const myh1 = React.createElement('h1', null, '这是一个大大的h1')

const mytest = <div>aaaa</div>

ReactDom.render(mytest,document.getElementById('app'))