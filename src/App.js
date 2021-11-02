import React, { useState } from "react";
import './App.css';
import Form from "./components/Form.js";
import ReviewList from "./components/ReviewList.js";
import {uuid} from "uuidv4";
import StarRating from "./components/StarRating";


function App() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({movie: "", review: "", id: uuid()});
  const [editing, setEditing] = useState(false);
  

  return (
    <div className="app">
      <h1>Movie Reviews</h1>
     
      <Form 
        editing={editing}
        form={form} 
        reviews={reviews} 
        setEditing={setEditing}
        setForm={setForm} 
        setReviews={setReviews}
        />
      <ReviewList 
        reviews={reviews}
        setForm={setForm}
        setEditing={setEditing}
        setReviews={setReviews}
      />
    
    </div>
  );
}

export default App;
