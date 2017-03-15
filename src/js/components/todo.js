//todoのコンポーネント作成

import React, { PropTypes } from "react";

//todoの実態は<li></li>
class Todo extends React.component {
  render(){
    return (
      <li onClick={this.props.onClick} style={{textDecoration:this.props.completed ? 'line-through' : }}
    )
  }
}
