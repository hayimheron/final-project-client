/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const styles = {
  body: {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
  },
  centeredBox: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
};

const HomePageView = () => {
  // Render Home page view
  return (
    <div style={styles.body}>
      <div style={styles.centeredBox}>
        <h1>Welcome to Campus Manager</h1>
        <p>Add your college campus with respective students. Click above to get started.</p>
      </div>
    </div>
  );
};


export default HomePageView;
