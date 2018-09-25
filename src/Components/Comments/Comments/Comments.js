import React,{Component} from 'react';
import Comment from '../Comment/Comment';
import AddComments from '../AddComments/AddComments';
import classes from './Comments.css';
class Comments extends Component {
    state = {
        comments : [{
            user:'@Jared',
            comment:'Gran propuesta, esperamos el crowfunding!'
        }],
        newComment: {
            user:'',
            comment:''
        },
        x:null
    }

    addCommentHandler = () => {
        let newComment = {
            user:'',
            comment:''
        };
        const comments = [...this.state.comments];
        comments.push(this.state.newComment);
        this.setState({comments:comments, newComment: newComment});
    }
    nameChange = (event) => {
        let comment = Object.assign({},this.state.newComment);
        comment.user = '@'+event.target.value;
        this.setState({newComment:comment});
    }
    commentChange = (event) => {
        let comment = Object.assign({},this.state.newComment);
        comment.comment = event.target.value;
        this.setState({newComment:comment});
    }
    render(){
        let comments = this.state.comments
                            .map(
                                (comment, index) => <Comment key={index} user={comment.user} comment={comment.comment} />
                            );
        if (this.state.comments.length < 1) {
            comments = null;
        }
        
        return (
            <div  className={classes.Comments}>
                <h1>Los comentarios de los clientes</h1>
                {comments}
                <h1>Deja un comentario</h1>
                <AddComments userChange={this.nameChange} commentChange={this.commentChange} clicked={this.addCommentHandler} />
            </div>
        );
    }
   
}

export default Comments;