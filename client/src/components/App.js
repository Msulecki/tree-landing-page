import React, { useState, useEffect } from 'react';
import Tree from './Tree';
import Loader from './Loader';
import '../styles/App.scss';

function App() {

  const [fetchData, setFetchData] = useState(null);
  const [fetchErr, setFetchErr] = useState(null);

  useEffect(() => {
    const url = '/api/all';

    fetch(url)
      .then(response => response.json())
      .then(data => setFetchData(data))
      .catch(err => setFetchErr(err))
  }, []);

  return (

    <div className="app">
      {(fetchData && <Tree data={fetchData} />) || <Loader err={fetchErr} />}
    </div>

  );
}
export default App;
