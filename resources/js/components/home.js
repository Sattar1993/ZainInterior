import React from 'react';
import ReactDOM from 'react-dom';
function Home() {

    return (
  <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>    );
}

export default Home;


if (document.getElementById('content')) {
    ReactDOM.render(<Home/>, document.getElementById('content'));
}