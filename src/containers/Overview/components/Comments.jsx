import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Comments = props => {
  const { comments } = props;
  return (
    <div className="сomments">
      {comments &&
        comments.map((сomment, index) => <div key={index}>{сomment}</div>)}
    </div>
  );
};

Comments.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string)
};

export default Comments;
