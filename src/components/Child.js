import React, { Component } from 'react';

const divStyle = {
  borderStyle: 'solid'
}

export default class Child extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
    this.passForm = this.passForm.bind(this)    
  }

  //View-specific. Can live on component
  toggleView(e){
    var newState = Object.assign({
      visible: !this.state.visible      
    })
    this.setState(newState)
  }

  createIndent(){
    const { depth } = this.props
    let depthExp = "->"
    let res = '';
    for (var i = 0; i < depth; i++) {
      res += depthExp
    }
    return res + depth   
  }

  //Action Creator
  passForm(){
    const id = this.props.attr.id
    const refVals = 
      Object.keys(this.refs)
            .map(key => this.refs[key].value)    
    this.props.addChar(refVals, id)
  }

  //View Components
  renderInput(){
    return (
      <span>
          <input type="text" defaultValue="Add an attr!" ref="attrKey"/>
          <input type="text" defaultValue="Add a value!" ref="attrVal"/>
          <button onClick={this.passForm}>Add new attr</button>
      </span>
    )
  }

  renderChild(child, idx){
    const { depth } = this.props
    return (
      <div key={idx}>
        <Child 
          attr={child}
          depth={depth+1}
          addChar={this.props.addChar}/>
      </div>
    )
  }

  renderAttributes(attribute, idx){            
    /*
      This is a problem. Too many event listeners.
      If have time, fix to filter the event that bubbles up rather than
      attach N number of listeners
    */
    return (      
      <li onClick={e => this.toggleView(e)}
          key={idx}>
            {attribute}: {this.props.attr[attribute]}</li>                                
    )
  }

  render(){            
    const { visible } = this.state
    const { children } = this.props.attr
    const attrs = Object.keys(this.props.attr)
                        .filter(key => key !== 'children')
                        .filter(key => key !== 'id')    
    return (      
      <div>
        {this.createIndent()}
        <ul style={divStyle}>
          {attrs.map((a,i) => this.renderAttributes(a, i))}
          {this.renderInput()}        
        </ul>
          {visible && children && children.map((child, idx) => this.renderChild(child, idx))}            
      </div>
    )
  }
}

