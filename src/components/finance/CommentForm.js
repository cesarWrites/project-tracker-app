import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';

const CommentForm = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the comment submission logic here (e.g., send to backend).
    console.log('Comment submitted:', comment);
  };

  return (
    <div className='comment-form'>
      <Paper>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Add a comment"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={comment}
            onChange={handleCommentChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default CommentForm;
