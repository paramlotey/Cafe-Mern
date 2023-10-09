import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";

const AdminDashboard = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [slots, setSlots] = useState([{ hours: '', isAvailable: false }]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [tables, setTables] = useState([]); // State to store the fetched tables

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddSlot = () => {
    if (slots.every((slot) => slot.hours.trim() !== '')) {
      setSlots([...slots, { hours: '', isAvailable: false }]);
    } else {
      // Display an error message or prevent adding a new slot here.
      // For now, I'll just console.log an error message.
      console.error('Cannot add a new slot with empty Slot Hours');
    }
  };

  const handleSlotChange = (index, key, value) => {
    const updatedSlots = [...slots];
    updatedSlots[index][key] = value;
    setSlots(updatedSlots);
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Table name is required';
    }

    const hasCheckedSlot = slots.some((slot) => slot.isAvailable);
    if (!hasCheckedSlot) {
      errors.slots = 'At least one slot should be marked as available';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await Axios.post('http://localhost:4000/addtable', {
        name,
        slots,
      });

      if (response.status === 201) {
        setMessage('Table added successfully');
        // After successfully adding the table, you can clear the form fields or perform any other desired actions.
        setName('');
        setSlots([{ hours: '', isAvailable: false }]);
      } else {
        const data = response.data;
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTables = async () => {
    try {
      const response = await Axios.get("http://localhost:4000/tables"); // Replace with your actual API endpoint
      if (response.status === 200) {
        setTables(response.data); // Store the fetched tables in state
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch tables when the component mounts
    fetchTables();
  }, []);

  const handleDeleteTable = async (tableId) => {
    try {
      const res = await Axios.delete(`http://localhost:4000/delete/${tableId}`);
      if (res.status === 200) {
        // Table successfully deleted, update the state or perform any necessary actions
        console.log("Table deleted");
        alert("Table Deleted");
        // Optionally, you can refetch the tables here to update the table list
        fetchTables();
      } else {
        console.error("Failed to delete the table");
        alert("Failed to delete the table");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <title>CoffeeDay</title>
      <header>
        <div className="logosec">
          <div className="logo">CoffeeDay</div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
          />
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
              className="icn srchicn"
              alt="search-icon"
            />
          </div>
        </div>
        <div className="message">
          <div className="circle" />
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
            className="icn"
            alt=""
          />
          <div className="dp">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
              className="dpicn"
              alt="dp"
            />
          </div>
        </div>
      </header>
      <div className="main-container">
        <div className="navcontainer">
          <nav className="nav">
            <div className="nav-upper-options">
              <div className="nav-option option1">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                  className="nav-img"
                  alt="dashboard"
                />
                <h3> Dashboard</h3>
              </div>
              <div className="option2 nav-option">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                  className="nav-img"
                  alt="articles"
                />
                <h3>Coffee Blogs</h3>
              </div>
              <div className="nav-option option3">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                  className="nav-img"
                  alt="report"
                />
                <h3> Analysis</h3>
              </div>

              <div className="nav-option option5">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                  className="nav-img"
                  alt="blog"
                />
                <h3> Profile</h3>
              </div>
              <div className="nav-option option6">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                  className="nav-img"
                  alt="settings"
                />
                <h3> Settings</h3>
              </div>
              <div className="nav-option logout">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                  className="nav-img"
                  alt="logout"
                />
                <h3>Logout</h3>
              </div>
            </div>
          </nav>
        </div>
        <div className="main">
          <div className="searchbar2">
            <input type="text" name="" id="" placeholder="Search" />
            <div className="searchbtn">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                className="icn srchicn"
                alt="search-button"
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box box1">
              <div className="text">
                <h2 className="topic-heading">100</h2>
                <h2 className="topic">Tables Views</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                alt="Views"
              />
            </div>
            <div className="box box2">
              <div className="text">
                <h2 className="topic-heading">450</h2>
                <h2 className="topic">Coffee Likes</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
                alt="likes"
              />
            </div>
            <div className="box box3">
              <div className="text">
                <h2 className="topic-heading">320</h2>
                <h2 className="topic">Comments</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                alt="comments"
              />
            </div>
            <div className="box box4">
              <div className="text">
                <h2 className="topic-heading">70</h2>
                <h2 className="topic">Published</h2>
              </div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
                alt="published"
              />
            </div>
          </div>
          <div className="report-container">
            <div className="report-header">
              <h1 className="recent-Articles">New Tables</h1>
              <Button variant="primary" onClick={handleShow}>
                +
              </Button>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>ADD TABLE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <h2>Add Table</h2>
                    <form onSubmit={handleSubmit}>
                      <label>
                        Table Name:
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                      </label>
                      <div>
                        Slots:
                        <button type="button" onClick={handleAddSlot}>
                          Add Slot
                        </button>
                        {slots.map((slot, index) => (
                          <div key={index}>
                            <input
                              type="text"
                              placeholder="Hours"
                              value={slot.hours}
                              onChange={(e) => handleSlotChange(index, 'hours', e.target.value)}
                            />
                            <label>
                              Is Available:
                              <input
                                type="checkbox"
                                checked={slot.isAvailable}
                                onChange={(e) =>
                                  handleSlotChange(index, 'isAvailable', e.target.checked)
                                }
                              />
                            </label>
                          </div>
                        ))}
                        {errors.slots && <p className="error">{errors.slots}</p>}
                      </div>
                      <button type="submit">Add Table</button>
                    </form>
                    {message && <p>{message}</p>}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary">ADD</Button>
                </Modal.Footer>
              </Modal>
              <button className="view">View All</button>
            </div>
            <div className="report-body">
              <div className="report-topic-heading">
                <div className="items">
                  {tables.map((table, index) => (
                    <div className="item1" key={index}>
                      <h3 className="t-op-nextlvl">{table.name}</h3>
                      <div className="slots-container">
                        {table.slots.map((slot, slotIndex) => (
                          <div className="slot" key={slotIndex}>
                            <h3 className="slot-hours">{slot.hours}</h3>
                            {slot.isAvailable ? (
                              <h3 className="slot-status label-tag">Booked</h3>
                            ) : (
                              <h3 className="slot-status label-not">Not Booked</h3>
                            )}
                          </div>
                        ))}
                      </div>
                      {/* Add a delete button here */}
                      <button onClick={() => handleDeleteTable(table._id)}>Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
