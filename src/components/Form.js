import React from "react";
import {uuid} from "uuidv4";
import StarRating from "./StarRating";

export const Form = ({ 
    editing,
    form, 
    reviews,
    setEditing, 
    setForm, 
    setReviews 
}) => {
  

    const handleChange = e =>{
        const { name, value } = e.target;
        setForm({...form, [name]: value});

        //set Form = form["movie"] = stuff I typed
    };

    const handleSubmit = e => {
        e.preventDefault();
        setReviews([...reviews, form]);
        setForm({ movie: "", review: "", id: uuid() });
        
        //preventing the reload  of form
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        setEditing(false);
        const updatedReviews = reviews.map((review) =>
          review.id === form.id ? form : review
        );
        setReviews(updatedReviews);
        setForm({ movie: "", review: "", id: uuid() });
      };


    return (
    <div>
        <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
            <h2>Leave a Review</h2>
            <label htmlFor="movie">Movie</label>
            <input 
                type="text" 
                placeholder="Movie name" 
                id="movie"
                name="movie"
                autoComplete="off"
                value={form.movie}
                onChange={handleChange}
            />
            <label htmlFor="review">Review</label>
            <textarea 
                value={form.review}
                placeholder="What'd you think?" 
                id="review"
                name="review"
                onChange={handleChange}
            />
            <StarRating 
          
            />
            <button type="submit">{editing ? "Update" : "Submit"}</button>
            
        </form>
       
    </div>
    )
}

export default Form;