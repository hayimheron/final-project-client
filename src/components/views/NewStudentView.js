/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: 'white',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: 'white',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'white',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const NewStudentView = (props) => {
  const {handleChange, handleSubmit } = props;
  const classes = useStyles();

  // Render a New Student view with an input form
  return (
    <div>
      <h1>New Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: 'black'}}>
              Add a Student
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'black', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" required onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'black', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" required onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{ color: 'black', fontWeight: 'bold' }}>Email: </label>
            <input type="email" name="email" required onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{ color: 'black', fontWeight: 'bold' }}>Image URL: </label>
            <input type="text" name="imageurl" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{ color: 'black', fontWeight: 'bold'}}>GPA: </label>
            <input type="number" step="0.1" min="0" max="4" name="gpa" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>


            <label style={{color:'black', fontWeight: 'bold'}}>Campus ID: </label>
            <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default NewStudentView;
