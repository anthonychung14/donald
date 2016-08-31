import React, { Component } from 'react';
import Child from '../components/Child'
import { treeData1, treeNull } from '../data/treeData1'
import { DFS } from '../util'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: treeData1      
    }
    this.addChar = this.addChar.bind(this)
  }

  addChar(data, id){            
    const oldTree = this.state.tree
    DFS(oldTree, id, data)    
    let copyTree = JSON.parse(JSON.stringify(oldTree))
    this.setState({
      tree: copyTree
    })    
  }

  render() {
    const tree = this.state.tree    
    return (
      <div>
        <h1>The Trump Family Tree</h1>        
        <h2>Click attributes to expand views</h2>
        <Child 
            attr={tree} 
            depth={0}
            addChar={this.addChar}/>        
      </div>
    );
  }
}
