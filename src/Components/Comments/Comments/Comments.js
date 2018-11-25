import React,{Component} from 'react';
import Comment from '../Comment/Comment';
import AddComments from '../AddComments/AddComments';
import classes from './Comments.css';
import {axios} from '../../../axios';

class Comments extends Component {
    state = {
        comments : [],
        newComment: {
            user:'',
            comment:''
        },
        x:null
    }

    getAllComments = ()=> {
        axios.get('/comments/get').then(
            (data) => {
                console.log(data);
                const comments = data.data;
                this.setState({
                    ...this.state,
                    comments: comments
                });
            }
        )
    }

    componentDidMount() {
        this.getAllComments();
        setTimeout(() => {
            let user = JSON.parse(this.props.user);
            user = user.user;
            let newComment = {
                ...this.state.newComment,
                user: user
            };
            this.setState({
                ...this.state,
                newComment: newComment
            })
        }, 1000);
    }

    addCommentHandler = () => {
        let newComment = {
            user:'',
            comment:''
        };
        let userid = JSON.parse(this.props.user);
        userid = userid.id;
        let comment = {
            user: userid,
            comment:this.state.newComment.comment
        }
        axios.post('/comments/create', comment).then(
            (data)=> {
                this.getAllComments();
            }
        )
      
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
                    <AddComments  comment={this.state.newComment} userChange={this.nameChange} commentChange={this.commentChange} clicked={this.addCommentHandler} />
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