import { Button } from '@material-ui/core';
import React, { useContext, useRef, useState } from 'react';
import styles from '../style/styles';
import { Store, HOST_API } from '../App';

export const Form = () => {
    const classes = styles();

    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {
        event.preventDefault();


        //validar que el name no sea nulo
        if (state.name === "") {
            alert("la tarea no puede estar vacia");
        } else {
            const request = {
                name: state.name,
                id: null,
                completed: false
            };

            fetch(HOST_API + "/todo", {
                method: "POST",
                body: JSON.stringify(request),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then((todo) => {
                    dispatch({ type: "add-item", item: todo });
                    setState({ name: "" });
                    formRef.current.reset();
                });

        }


    };

    const onEdit = (event) => {
        event.preventDefault();

        const request = {
            name: state.name,
            id: item.id,
            isCompleted: item.isCompleted
        };


        fetch(HOST_API + "/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((todo) => {
                dispatch({ type: "update-item", item: todo });
                setState({ name: "" });
                formRef.current.reset();
            });
    };

    const onChangeName = (event) => {

        if (event.target.value === " ") {
            event.target.value = "";
        };

        setState({ ...state, name: event.target.value });
    };

    return <form ref={formRef}>
        <input
            type="text"
            name="name"
            placeholder="¿Qué piensas hacer hoy?"
            defaultValue={item.name}
            onChange={onChangeName}></input>
        {item.id && <button onClick={onEdit}>Actualizar</button>}
        {!item.id && <Button variant="contained" color="primary"
            className={classes.buttonAdd} onClick={onAdd}>Crear</Button>}
    </form>;
};
