import React, { useState } from 'react';
import axios from "axios";
import './reserve.css';
import { FaRegBookmark } from 'react-icons/fa';

import shape1 from '../../Images/Shape 2.png';
import shape2 from '../../Images/Shape 3.png';

const Reserve = () => {
    const availableTables = [
        "Table 01",
        "Table 02",
        "Table 03",
        "Table 04",
        "Table 05"
    ];

    const availableTimeSlots = [
        "10-12",
        "12-2",
        "2-4",
        "4-6",
        "6-8"
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bookingDate: '',
        table: '',
        timing: '',
        person: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name) {
            errors.name = 'Name is required';
        }

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.phone) {
            errors.phone = 'Phone number is required';
        }

        if (!formData.bookingDate) {
            errors.bookingDate = 'Booking date is required';
        }

        if (!formData.table) {
            errors.table = 'Table selection is required';
        }

        if (!formData.timing) {
            errors.timing = 'Time slot selection is required';
        }

        if (!formData.person) {
            errors.person = 'Number of persons is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.post("http://localhost:4000/booktable", formData);
            if(response.data.success){
                alert(response.data.message)
            }else{
                alert(response.data)
            }
                console.log("res: ",response);
                // const msg = await axios.post("http://localhost:4000/send", formData);
            } catch (error) {
                
                console.log(error);
            }
        }
    };

    return (
        <section className="reserve container" id="reserve">
            <h2 className="section-title" data-title='For Reservation'>
                Book Your Table
            </h2>

            <form className="reserve-form grid" onSubmit={handleSubmit}>
                <div className="form-input-div">
                    <input type="text" name="name" placeholder='Your Name' onChange={handleInputChange} required className="form-input" />
                    {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                </div>

                <div className="form-input-div">
                    <input type="email" name='email' placeholder='Your Email' onChange={handleInputChange} required className="form-input" />
                    {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                </div>

                <div className="form-input-div">
                    <input type="number" name='phone' placeholder='Your Phone Number' onChange={handleInputChange} required className="form-input" />
                    {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
                </div>

                <div className="form-input-div">
                    <input
                        type="date"
                        placeholder='Booking Date: DD/MM/YY'
                        className={`form-input ${formErrors.bookingDate ? 'invalid' : ''}`}
                        name="bookingDate"
                        required
                        value={formData.bookingDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                    />
                    {formErrors.bookingDate && <p className="error-message">{formErrors.bookingDate}</p>}
                </div>

                <div className="form-input-div">
                    <select name="table" onChange={handleInputChange} required className={`form-input ${formErrors.table ? 'invalid' : ''}`}>
                        <option value="">Select a Table</option>
                        {availableTables.map((table, index) => (
                            <option key={index} value={table}>{table}</option>
                        ))}
                    </select>
                    {formErrors.table && <p className="error-message">{formErrors.table}</p>}
                </div>

                <div className="form-input-div">
                    <select name="timing" onChange={handleInputChange} required className={`form-input ${formErrors.timing ? 'invalid' : ''}`}>
                        <option value="">Select a Time Slot</option>
                        {availableTimeSlots.map((slot, index) => (
                            <option key={index} value={slot}>{slot}</option>
                        ))}
                    </select>
                    {formErrors.timing && <p className="error-message">{formErrors.timing}</p>}
                </div>

                <div className="form-input-div">
                    <input type="number" name="person" placeholder='Number of Persons' onChange={handleInputChange} required className={`form-input ${formErrors.person ? 'invalid' : ''}`} />
                    {formErrors.person && <p className="error-message">{formErrors.person}</p>}
                </div>

                <div className="form-input-div form-input-textarea">
                    <textarea placeholder='Your Message' name="message" onChange={handleInputChange} className="form-input"></textarea>
                </div>

                <button className="btn btn-flex reserve-btn">
                    <FaRegBookmark /> Book A Table
                </button>
            </form>
            <img src={shape1} alt="" className='shape-1' />
            <img src={shape2} alt="" className='shape-2' />
        </section>
    );
};

export default Reserve;
