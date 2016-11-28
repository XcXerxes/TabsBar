import React,{Component} from 'react'

export default class TabBar extends Component{
    constructor(...args){
        super(...args);
        this.handle=this.handle.bind(this);
    }
    handle(e){debugger;
        this.props.handle(this.props.index);
    }
    render(){
        return(
            <div className="tabBar-item" onClick={this.handle} data-index={this.props.index} ref="tabBar" style={this.props.style?this.props.style:{}}>
                <img src={this.props.img}></img>
                <span>{this.props.name}</span>
            </div>
        )
    }
}