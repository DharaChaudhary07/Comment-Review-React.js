import React from "react";
import { useState } from "react";
import "./SocialmediaPost.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const SocialmediaPost = () => {

    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [submit, setSubmit] = useState([]);

    const handleStarsClick = (index) => {
        setRating(index + 1);
    };

    const handleCommentsChange = (event) => {
        setComment(event.target.value);
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSubmit = {
            name,
            comment,
            rating
        };
        setSubmit([...submit, newSubmit]);
        setName('');
        setComment('');
        setRating(0);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Social Media Post</h2>
                                <div className="box mb-3 ">
                                        <img src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_instagram-512.png" alt=""/>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control mb-3" id="name" aria-describedby="nameHelp" placeholder="Enter Your Name...."      value={name} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment" className="form-label">Comment</label>
                                        <textarea className="form-control mb-3" id="comment" placeholder="Enter Someting here...."  rows="4" value={comment} onChange={handleCommentsChange}>
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Rating</label>
                                        <div className="rating mb-3 d-flex justify-content-center">
                                            {[...Array(5)].map((_, index) => (
                                                <span key={index} className={`star ${index < rating ? 'filled' : ''}`} onClick={() => handleStarsClick(index)}>
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-dark mb-3">
                                        Submit
                                    </button>
                                </form>
                                <div className="submitted-feedback">
                                    <h3>Submitted Feedback</h3>
                                    {submit.length > 0 ? (
                                        submit.map((submit, index) => (
                                            <div key={index} className="feedback-item">
                                                <p><strong>Name:-</strong> {submit.name}</p>
                                                <p><strong>Comment:-</strong> {submit.comment}</p>
                                                <p><strong>Rating:-</strong> {submit.rating} Stars</p>
                                                <hr />
                                            </div>
                                        ))
                                    ) : (
                                        <p>No feedback yet....</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SocialmediaPost;