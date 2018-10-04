import { connect } from 'react-redux';
import { fetchPosts } from './../../actions/action-posts';
import { bindActionCreators } from 'redux';
import Posts from './Posts';

const mapStateToProps = ({posts}) => ({
  posts
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPosts
  }, dispatch)
};

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default PostsContainer;
