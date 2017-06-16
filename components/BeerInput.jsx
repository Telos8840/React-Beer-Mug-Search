import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField'

class BeerInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			text: this.props.text || ''
		};
	}

	handleEnter(e) {
		if (e.keyCode === 13) {
			const text = e.target.value.trim();
			this.props.onEnter(text);
			this.setState({ text: '' });
		}
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	render() {
		return (
            <div>
              <TextField onKeyDown={this.handleEnter.bind(this)}
                         id='new-todo-input'
                         type="text"
                         hintText="ex: Ballast Point Sculpin"
                         floatingLabelText="What beer are you drinking?"
                         value={this.state.text}
                         onChange={this.handleChange.bind(this)}
              />
            </div>
		);
	}
}

BeerInput.propTypes = {
	onEnter: PropTypes.func.isRequired,
	text: PropTypes.string
};

export default BeerInput;
