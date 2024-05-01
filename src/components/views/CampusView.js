import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { unenrollStudent, enrollStudent } from "../../store/actions/actionCreators";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, deleteCampus, unenrollStudent } = props;
  const campus_id = campus.id;
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <div style={{backgroundColor:"#f0f0f0", paddingTop:"1em", paddingBottom:"1em", marginRight:"8em", marginLeft:"8em"}}>
      <img
          src={campus.imageurl || "https://news.harvard.edu/wp-content/uploads/2024/03/admissions_2028_111623_Features_DG_0013-2500-2048x1366.jpg"}  // Use default if imageUrl is falsy
          style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }}  // Adjust styling as needed
        />
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <div style={{ marginTop: '0.5em' }}>
      <Link to={`/editcampus/${campus.id}`}>
          <Button style={{ color: "white", backgroundColor: "#333", marginRight:"0.5em", borderRadius: '4px' }}>Edit Campus</Button>
        </Link>
        <Button style={{color:"white", backgroundColor:"#ff6f61", borderRadius: '4px'}} onClick={() => deleteCampus(campus.id)}>Delete Campus</Button>
      </div>
      <h3>Total Students Enrolled: {campus.students.length}</h3>
      {/* Table for student information, only display if there are students enrolled */}
      {campus.students.length > 0 && (
        <div style={{ marginBottom:"0.5em", paddingLeft:"1em", paddingRight:"1em", overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #333', padding: '0.5em' }}>Student Name</th>
                <th style={{ border: '1px solid #333', padding: '0.5em' }}>Enroll/Unenroll</th> 
              </tr>
            </thead>
            <tbody>
              {campus.students.map(student => (
                <tr key={student.id}>
                  <td style={{ border: '1px solid #333', padding: '0.5em' }}>
                    <Link to={`/student/${student.id}`}>{student.firstname} {student.lastname}</Link>
                  </td>
                  <td style={{ border: '1px solid #333', padding: '0.5em' }}>
                    <Button style={{ color: "white", backgroundColor: "#ff6f61", borderRadius: '4px' }} onClick={() => unenrollStudent(student)}>Unenroll</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Link to={{
        pathname: `/:id/enrollnew`,
        query: {campus_id}
        }}>
        <Button style={{color:"white", backgroundColor:"#007b7f", borderRadius: '4px'}}>Enroll New Student</Button>
      </Link>
      <br></br>
      <br></br>
      <Link to={{
        pathname: `/enrollexisting`,
        query: {campus_id}
      }}>
          <Button style={{color:"white", backgroundColor:"#007b7f", borderRadius: '4px'}}>Enroll Existing Student</Button>
      </Link>
      </div>
    </div>
  );
};

export default CampusView;
