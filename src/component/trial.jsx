import { Component } from "react";
import { Table } from "react-bootstrap";

class Trial extends Component {
    render() {
        const {name, fatherName, lastname} = this.props;
        console.log({name, fatherName, lastname})
        return (
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{name}</td>
                            <td>{fatherName}</td>
                            <td>{lastname}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Trial;