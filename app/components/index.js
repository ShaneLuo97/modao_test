import React from 'react'
import Card from './card'
import Add from './add'
import '../style/main.css'

//模拟数据
let jsonData = [
  {"id":"1","name":"墨刀实验室","project_count":3,"color":"#81d395","private":false,"locked":false},
  {"id":"2","name":"墨刀魔法棒团队","project_count":0,"color":"#f8c374","private":false,"locked":false},
  {"id":"3","name":"超级工作组","project_count":4,"color":"#f2908d","private":true,"locked":false},
  {"id":"4","name":"冷笑客服组","project_count":4,"color":"#e38073","private":false,"locked":false},
  {"id":"5","name":"设计部门","project_count":4,"color":"#f8c767","private":false,"locked":false},
  {"id":"6","name":"Third Reactor","project_count":1,"color":"#8dcaeb","private":true,"locked":true},
]

export default class Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    //遍历数据获得组件数组
    let dataArray = jsonData.map((data)=>{
      return (
        <Card data={data}/>
      )
    })
    return (
      <div className="projects">
          {dataArray}
          <Add/>
      </div>
    );
  }
}
