import logo from './logo.svg';
import './App.css';

// original code
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//hp 01-01 simple page 
function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '50px',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <h1 style={{ color: '#333' }}>Welcome to Pure Beater!</h1>

      {/* Username Input */}
      <div style={{ margin: '20px 0' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Username:</label>
        <input 
          type="text" 
          id="username" 
          placeholder="Enter your username" 
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
      </div>

      {/* Password Input */}
      <div style={{ margin: '20px 0' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Password:</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter your password" 
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button 
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: '#fff',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            marginRight: '10px'
          }}
          onClick={() => alert('Sign In Clicked!')}
        >
          Sign In
        </button>
        <button 
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#28A745',
            color: '#fff',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer'
          }}
          onClick={() => alert('Join Community Clicked!')}
        >
          Join Community
        </button>
      </div>
    </div>
  );
}

export default App;
/////////////////////////////////////////////////////////


