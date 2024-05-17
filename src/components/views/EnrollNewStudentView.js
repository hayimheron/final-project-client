/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '400px',
    backgroundColor: 'white',
    borderRadius: '5px',
    margin: 'auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formTitle: {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '24px',
    padding: '10px',
    borderRadius: '5px 5px 0 0',
    marginBottom: '15px',
    textAlign: 'center',
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    boxSizing: 'border-box',
    borderRadius: '3px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
  },
}));

const EnrollNewStudentView = (props) => {
  const { campus_id, handleChange, handleSubmit } = props;
  const classes = useStyles();

  // Render a New Student view with an input form
  return (
    <div>
      <h1>Enroll New Student</h1>

      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          Add a Student
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={classes.label}>First Name:</label>
          <input className={classes.input} type="text" name="firstname" required onChange={(e) => handleChange(e)} />
          <br />

          <label className={classes.label}>Last Name:</label>
          <input className={classes.input} type="text" name="lastname" required onChange={(e) => handleChange(e)} />
          <br />

          <label className={classes.label}>Email:</label>
          <input className={classes.input} type="email" name="email" required onChange={(e) => handleChange(e)} />
          <br />

          <label className={classes.label}>Image URL:</label>
          <input className={classes.input} type="text" name="imageurl" onChange={(e) => handleChange(e)} />
          <br />

          <label className={classes.label}>GPA:</label>
          <input className={classes.input} type="number" step="0.1" min="0" max="4" name="gpa" onChange={(e) => handleChange(e)} />
          <br />

          <label className={classes.label}>Campus ID:</label>
          <input className={classes.input} type="text" name="campusId" value={campus_id.campus_id} onChange={(e) => handleChange(e)} />
          <br />

          <Button className={classes.button} variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EnrollNewStudentView;
