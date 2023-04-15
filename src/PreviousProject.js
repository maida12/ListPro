import React from "react";
import './PreviousProject.css';

const PreviousProject = () => {
    const projects = [
        {
          name: "Project 1",
          createdBy: "John Doe",
          startingDate: "2023-04-15T12:34:56",
          endingDate: "2023-04-15T12:34:56",
          id: 1
        },
        {
          name: "Project 2",
          createdBy: "Jane Smith",
          startingDate: "2023-04-15T12:34:56",
          endingDate: "2023-04-15T12:34:56",
          id: 2
        },
        {
          name: "Project 3",
          createdBy: "Bob Johnson",
          startingDate: "2023-04-15T12:34:56",
          endingDate: "2023-04-15T12:34:56",
          id: 3
        }
      ];
    
      return (
        <div className="container">
          <h1>Project List</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Created By</th>
                <th>Starting Date</th>
                <th>Ending Date</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.createdBy}</td>
                  <td>{project.startingDate}</td>
                  <td>{project.endingDate}</td>
                  <td><button>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

}
export default PreviousProject;  