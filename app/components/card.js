import React from 'react'

export default class Card extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let data = this.props.data;
    //data判空
    if(data==null)
        return;
    return (
        <div className={data.locked ? "project-card locked":"project-card"}>
            <div className="avatar"><span style={{backgroundColor:data.color}}></span></div>
            <div className="detail">
                <div className="project-name">{data.name}</div>
                <div className="project-tags">
                {data.locked ? <span>锁定</span>:""}
                {data.private ? <span>私密</span>:""}
                </div>
                <div className="project-count"><span>{data.project_count}</span>项目</div>
            </div>
        </div>
    )
  }
}
