export const DFS = function(treeNode, idSeek, attrs) {  
  if(treeNode.id === idSeek){
    const key = attrs[0]
    const val = attrs[1]
    treeNode[key] = val
    return treeNode
  }
  else {
    treeNode.children.forEach(node => {
      DFS(node, idSeek, attrs)
    })
  }
  return "CAN'T FIND IT?"
}