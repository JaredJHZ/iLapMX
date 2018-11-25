import React,{Component} from 'react';
import Comment from '../Comment/Comment';
import AddComments from '../AddComments/AddComments';
import classes from './Comments.css';
import { Parallax } from 'react-parallax';
import background from '../../../assets/img/comments.png'
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
        let user = '@'+this.state.newComment.user;
        let comment = {
            user:user,
            comment:this.state.newComment.comment
        }
        this.setState({newComment:comment},()=>{
            const comments = [...this.state.comments];
            comments.push(this.state.newComment);
            this.setState({comments:comments, newComment: newComment});
        });
      
    }
    nameChange = (event) => {
        let comment = Object.assign({},this.state.newComment);
        comment.user = event.target.value;
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

        let comment = (
            <div  className={classes.Comments}>
                <h1>Los comentarios de los clientes</h1>
                {comments}
                <h1>Se necesita estar registrado para hacer un comentario</h1>
            </div>
        );

        if (this.props.logged) {
            comment = (
                <div  className={classes.Comments}>
                    <h1>Los comentarios de los clientes</h1>
                    {comments}
                    <h1>Deja un comentario</h1>
                    <AddComments comment={this.state.newComment} userChange={this.nameChange} commentChange={this.commentChange} clicked={this.addCommentHandler} />
                </div>  
            );
        }
        
        return (
            <div>
                {comment}
            </div>
        )
    }
   
}

export default Comments;