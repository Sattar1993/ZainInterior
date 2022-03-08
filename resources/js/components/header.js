import React from 'react';
import ReactDOM from 'react-dom';

function header() {
    return (
  <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>    );
}

export default header

if (document.getElementById('content')) {
    ReactDOM.render(<header/>, document.getElementById('content'));
}
