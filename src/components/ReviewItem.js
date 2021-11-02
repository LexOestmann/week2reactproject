import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";



export const ReviewItem = ({ handleDelete, handleEdit, review}) => {
    return (
        <div className="reviewItem">
            <h2>{review.movie}</h2>
            <p>{review.review}</p> 
            <p>{review.rating}</p> 

            <div className="buttons">
                <button onClick={() => handleDelete(review.id)}>
                    <FaTrash />
                </button>
                <button onClick={() => handleEdit(review.id)}>
                    <FaEdit />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;