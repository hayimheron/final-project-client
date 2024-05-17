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
  
  const NewCampusView = (props) => {
    const {handleChange, handleSubmit } = props;
    const classes = useStyles();
  
    // Render a New Student view with an input form
    return (
      <div>
        <h1>New Campus</h1>
  
        <div className={classes.root}>
          <div className={classes.formContainer}>
            <div className={classes.formTitle}>
              <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: 'black'}}>
                Add Campus
              </Typography>
            </div>
            <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
                <label style= {{color:'black', fontWeight: 'bold'}}>Name: </label>
                <input type="text" name="name" required onChange ={(e) => handleChange(e)} />
                <br/>
                <br/>
  
                <label style={{ color: 'black', fontWeight: 'bold' }}>Image URL: </label>
                <input type="text" name="imageurl" onChange={(e) => handleChange(e)} />
                <br/>
                <br/>

                <label style={{color:'black', fontWeight: 'bold'}}>Address: </label>
                <input type="text" name="address" required onChange={(e) => handleChange(e)} />
                <br/>
                <br/>
    
                <label style={{ color: 'black', fontWeight: 'bold' }}>Description: </label>
                <textarea name="description" onChange={(e) => handleChange(e)} rows={4} cols={50}/>
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
  
  export default NewCampusView;
