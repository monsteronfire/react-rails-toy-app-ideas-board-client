import React from 'react';

class IdeaForm extends React.Component {
  render() {
    return (
      <div className='tile'>
        <form>
          <input className='input' type='text' name='title' placeholder='Enter a title' />
        </form>
      </div>
    )
  }
}

export default IdeaForm;
