import React, {Component} from 'react';


class TodoForm extends Component {

  constructor(){
    super();
    this.state= {
      title: '',
      director: '',
      year: '',
      rating: ''

  };
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

}

handleInput(e){
  const { value, name } = e.target;
  this.setState({
    [name]: value

  })
  console.log(this.state);
}

handleSubmit(e){
  e.preventDefault();
  this.props.onAddTodo(this.state);
  console.log('sending the data...');
}

  render (){
    return (
      <div classname="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Title"
                />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="director"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Director"
                />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="year"
                className="form-control"
                placeholder="Year"
                onChange={this.handleInput} />
            </div>
            <div className="form-group">
              <input
                type=""
                name="rating"
                className="form-control"
                placeholder="Rating"
                onChange={this.handleInput} />
            </div>
          </form>
      </div>
    )
  }
}

export default TodoForm;
