import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

class AddTodoInput extends React.Component {
  state = { text: '' };
  render() {
    const { text } = this.state;
    return (
      <TextInput
        onSubmitEditing={() => {
          this.props.onSubmit(text);
          this.setState({ text: '' });
        }}
        placeholder="New Todo Item..."
        onChangeText={text => this.setState({ text })}
        value={text}
      />
    );
  }
}
AddTodoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodoInput;
