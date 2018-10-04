import { connect } from 'react-redux';
import PostDetail from './PostDetail';
import { fetchPost } from "./../../actions/action-posts";
import { bindActionCreators } from 'redux';

const mapStateToProps = ({posts}, ownProps) => ({
  post: posts[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPost
  }, dispatch)
}

const PostDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)

export default PostDetailContainer;
