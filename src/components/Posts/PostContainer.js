import { connect } from 'react-redux';
import { fetchPosts } from './../../actions/action-posts';
import { bindActionCreators } from 'redux';
import Post from './Post';

const mapStateToProps = ({posts}) => ({
  posts
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPosts
  }, dispatch)
};

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

export default PostContainer;
