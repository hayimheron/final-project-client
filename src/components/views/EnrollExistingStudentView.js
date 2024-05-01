/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const AllStudentsView = (props) => {
  const { students, campus_id, enrollStudent } = props;

  const handleEnrollClick = (studentId, campusId) => {
    enrollStudent(studentId, campusId);
  };

  if (students.length === 0) {
    return (
      <div>
        <h3>No students to enroll!</h3>
        <Link to={`/campuses`}>
          <Button style={{ color: "#fff", backgroundColor: "#333", marginRight: "0.5em" }}>Go Back to All Campuses</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>All Students</h1>

      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <img
              src={student.imageurl || "https://www.timeshighereducation.com/sites/default/files/styles/article785xauto/public/capture_1.png"}
              style={{ maxWidth: '100%', maxHeight: '100px', borderRadius: '50%', height: 'auto', maxWidth: '100%' }}
            />
            <br />
            <br />
            <Button style={{ color: '#fff', backgroundColor: 'coral', borderRadius: '4px', marginBottom: '1em' }} onClick={() => handleEnrollClick(student.id, campus_id)}>
              Enroll Student
            </Button>
            <br />
            <hr />
          </div>
        );
      })}

      <br />
      <Link to={`/campuses`}>
        <Button style={{ color: "#fff", backgroundColor: "#333", marginTop: '1em' }}>Go Back to All Campuses</Button>
      </Link>
    </div>
  );
};

export default AllStudentsView;
