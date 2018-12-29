import React from 'react'

export default class Add extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div className="project-card">
            <div className="add-new">
                <i>+</i>
                <span>新建项目组</span>
            </div>
        </div>
    )
  }
}
