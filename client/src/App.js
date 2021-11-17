import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {

  constructor() {
    super();
    this.state = {
      al_nombre: '',
      al_curso: '',
      b1: '',
      b2: '',
      c1: '',
      b3: '',
      b4: '',
      c2: '',
      notes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addNote(e) {
    e.preventDefault();
    if(this.state._id) {
      fetch(`/api/notes/${this.state._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          al_nombre: this.state.al_nombre,
          al_curso: this.state.al_curso,
          b1: this.state.b1,
          b2: this.state.b2,
          c1: this.state.c1,
          b3: this.state.b3,
          b4: this.state.b4,
          c2: this.state.c2
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({html: 'Note Updated'});
          this.setState({_id: '', al_nombre: '', al_curso: '', b1: '', b2: '', c1: '', b3: '', b4: '', c2: ''});
          this.fetchNotes();
        });
    } else {
      fetch('/api/notes', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.M.toast({html: 'Note Saved'});
          this.setState({al_nombre: '', al_curso: '', b1: '', b2: '', c1: '', b3: '', b4: '', c2: ''});
          this.fetchNotes();
        })
        .catch(err => console.error(err));
    }

  }

  deleteNote(id) {
    // if (confirm('Estas seguro de que desea eliminar este campo?')) {
      fetch(`/api/notes/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.M.toast({html: 'Note deleted'});
          this.fetchNotes();
        });
    // }
  }

  editNote(id) {
    fetch(`/api/notes/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          _id: data._id,
          al_nombre: data.al_nombre,
          al_curso: data.al_curso,
          b1: data.b1,
          b2: data.b2,
          c1: data.c1,
          b3: data.b3,
          b4: data.b4,
          c2: data.c2
        });
      });
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes() {
    fetch('/api/notes')
      .then(res => res.json())
      .then(data => {
        this.setState({notes: data});
        console.log(this.state.notes);
      });
  }

  render() {
    return (
      <div>
        {/* NAVIGATION */}
        <nav className="red darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/login">Login</Link>
              <a href="/"  className="brand-logo">ETN 35</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addNote}>
                    <div className="row">
                      <div className="input-field col s5">
                        <input name="al_nombre" onChange={this.handleChange} value={this.state.al_nombre} type="text" placeholder="nombre del alumno" autoFocus/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s5">
                      <textarea name="al_curso" onChange={this.handleChange} value={this.state.al_curso} cols="15" rows="5" placeholder="curso del alumno" className="materialize-textarea"></textarea>
                      <textarea name="b1" onChange={this.handleChange} value={this.state.b1} cols="30" rows="10" placeholder="nota del primer bimestre" className="materialize-textarea"></textarea>
                      <textarea name="b2" onChange={this.handleChange} value={this.state.b2} cols="30" rows="10" placeholder="nota del segundo bimestre" className="materialize-textarea"></textarea>
                      <textarea name="c1" onChange={this.handleChange} value={this.state.c1} cols="30" rows="10" placeholder="nota del primer cuatrimestre" className="materialize-textarea"></textarea>
                      <textarea name="b3" onChange={this.handleChange} value={this.state.b3} cols="30" rows="10" placeholder="nota del tercer bimestre" className="materialize-textarea"></textarea>
                      <textarea name="b4" onChange={this.handleChange} value={this.state.b4} cols="30" rows="10" placeholder="nota del cuarto bimestre" className="materialize-textarea"></textarea>
                      <textarea type="text" name="c2" onChange={this.handleChange} value={this.state.c2} cols="30" rows="10" placeholder="nota del segundo cuatrimestre" className="materialize-textarea"></textarea>

                      </div>

                    </div>

                    <button  type="submit" className="btn red darken-4">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
              <table>
                <thead>
                  <tr>
                    <th>alumno</th>
                    <th>curso</th>
                    <th>b1</th>
                    <th>b2</th>
                    <th>c1</th>
                    <th>b3</th>
                    <th>b3</th>
                    <th>c2</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.notes.map(note => {
                      return (
                        <tr key={note._id}>
                          <td>{note.al_nombre}</td>
                          <td>{note.b1.substring(0,2)}</td>
                          <td>{note.b2.substring(0,2)}</td>
                          <td>{note.c1.substring(0,2)}</td>
                          <td>{note.b3.substring(0,2)}</td>
                          <td>{note.b4.substring(0,2)}</td>
                          <td>{note.c2.substring(0,2)}</td>
                          <td>
                            <button onClick={() => this.deleteNote(note._id)} className="btn red darken-4">
                              <i className="material-icons">delete</i>
                            </button>
                            <button onClick={() => this.editNote(note._id)} className="btn red darken-4" style={{margin: '4px'}}>
                              <i className="material-icons">edit</i>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
