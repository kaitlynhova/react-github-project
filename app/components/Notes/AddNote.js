import React  from 'react';

class AddNote extends React.Component{
  handleSubmit(){
    var newNote = this.note.value;
    this.note.value= "";
    this.props.addNote(newNote);
  }
  setRef(ref){
    this.note = ref;
  }
  render(){
    return(
      <div className="input-group">
        <input type="text" className="form-control" placeholder="add new note" ref={(ref) => this.setRef(ref)}/> // one way to reach 'this' outside of function
        <span classNmae="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}> submit </button>// another way to reach 'this' outside of function
        </span>
      </div>
    )
  }
}

AddNote.propTypes ={
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  }

module.exports = AddNote;