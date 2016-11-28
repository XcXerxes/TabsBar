import React,{Component} from 'react'
import "../../public/css/tabBar.css"
import TabBar from '../components/TabBar'


export default class App extends Component{
    constructor(...args){
        super(...args);
        this.state={
            index:1
        }
        this.handle=this.handle.bind(this);
    }
    handle(index){
        this.setState({index:index});
    }
    render(){
        const array=[{name:'首页',index:1,img:"img/home.png"},{name:'关于',index:2,img:"img/location_fill.png"},{name:'个人',index:3,img:"img/voice_fill.png"}];
        var me=this;
        const list=array.map((item,index)=>{
            if(me.state.index===item.index){
                return(
                    <TabBar {...item} key={index} handle={this.handle} style={{border:'1px solid #333'}} />
                )
            }else {
                return(
                    <TabBar {...item} key={index}  onClick={this.handle} handle={this.handle} />
                )
            }
        });
        return(
            <div className="app">
                {list}
            </div>
        )
    }
}
