import Modal from "react-bootstrap/Modal";
import React from "react";

const User = (props) => {
  console.log(props.user);
  const { user } = props;
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Facing issue when use map */}

        <ul>
          <li key="login">{user.login}</li>
          <li key="node_id">{user.node_id}</li>
          <li key="organizations_url">{user.organizations_url}</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => props.hideModal()}>Cancel</button>
      </Modal.Footer>
    </Modal>
  );
};

export default User;
