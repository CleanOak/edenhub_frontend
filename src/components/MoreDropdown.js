import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css"
import "react-toastify/dist/ReactToastify.css";
import { toast} from "react-toastify";
import { Modal, Button } from "react-bootstrap";

import { useHistory } from "react-router";

export function ProfileEditDropdown({ id }) {
  const history = useHistory();

  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
// const ThreeDots = React.forwardRef(({ onClick }, ref) => (
//     <i
//       className="fas fa-ellipsis-v"
//       ref={ref}
//       onClick={(e) => {
//         e.preventDefault();
//         onClick(e);
//       }}
//     />
//   ));
  
  export const MoreDropdown = ({ handleEdit, handleDelete }) => {

    const [showConfirm, setShowConfirm] = useState(false);

    // Open the confirmation modal

    const handleShowConfirm = () => setShowConfirm(true);

    // Close the confirmation modal
    const handleCloseConfirm = () => setShowConfirm(false);

    const handleConfirmedDelete = async () => {
      try {
        // Call the original handleDelete function
        await handleDelete();
  
        // Show success toast
        toast.success("Post has been deleted successfully!", {
          position: "top-center",
          autoClose: 3000,
        });

        // close the modal after successful deletioin
        handleCloseConfirm();

      } catch (error) {
        // Show error toast if delete fails
        toast.error("Failed to delete the item. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });

        // Close the modal in case of an error
        handleCloseConfirm(); 
      }
    };

    return (
      <>
      <Dropdown className="ms-auto" drop="left">
        <Dropdown.Toggle as={ThreeDots} />
  
        <Dropdown.Menu
          className="text-center"
          popperConfig={{ strategy: "fixed" }}
        >
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleEdit}
            aria-label="edit"
          >
            <i className="fas fa-edit" />
          </Dropdown.Item>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleShowConfirm} // Show confirmation modal
            aria-label="delete"
          >
            <i className="fas fa-trash-alt" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

     
      <Modal show={showConfirm} onHide={handleCloseConfirm} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this post? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmedDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };

 const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
      className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

export default MoreDropdown;