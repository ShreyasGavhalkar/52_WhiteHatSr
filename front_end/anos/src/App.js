import styles from "./App.module.css"
import React from 'react';
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.sectionTitle}>Admin Dashboard</div>
      <p>My Elections</p>
      <p>Name</p>
      <p>Status</p>
      <div>
        <button>Election 1 </button>
        <p>Over</p>
      </div>
      <div>
        <button>Election 2 </button>
        <p>Ongoing</p>
      </div>
      <div>
        <button>Election 3 </button>
        <p>Upcoming</p>
      </div>
    </div>
  );
}

export default App;
