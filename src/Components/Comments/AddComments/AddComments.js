import React from 'react';
import classes from './AddComments.css';

const addComments = (props) =>
 {
     

return (
    <form className={classes.AddComments}>
        <h5>Ingrese su username: </h5>
        <input value={props.comment.user} type="text" placeholder="user" onChange={(event) => props.userChange(event)} />
        <h5>Ingrese su comentario</h5>
        <textarea value={props.comment.comment} placeholder="Comentario" onChange = {(event) => props.commentChange(event)} />
        <button type="button" className={classes.Button} onClick={props.clicked}>Enviar</button>
    </form>
);

}

export default addComments;