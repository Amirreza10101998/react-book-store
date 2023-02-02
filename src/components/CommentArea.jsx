import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class CommentArea extends Component {
  state = {
    comment: '',
  };

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleCommentSubmit = (e) => {
    e.preventDefault();
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleCommentSubmit}>
          <FormControl
            value={this.state.comment}
            onChange={this.handleCommentChange}
            placeholder="Write a comment..."
          />
          <Button type="submit">Post Comment</Button>
        </Form>
      </div>
    );
  }
}

export default CommentArea;




