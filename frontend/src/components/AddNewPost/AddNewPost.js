import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import FileInput from "../UI/FileInput/FileInput";
import FormElement from "../UI/Form/FormElement/FormElement";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const AddNewPost = ({onSubmit}) => {
    const user = useSelector(state => state.users.user);

    const [state, setState] = useState({
        title: "",
        description: "",
        image: "",
    });

    const submitFormHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });
        onSubmit(formData);
    };

    const inputChangeHandler = e => {
        const {name, value} = e.target;

        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];

        setState(prevState => ({...prevState, [name]: file}));
    };

    if (!user) {
        return <Redirect to='/login'/>
    }

    return (
        <form
            autoComplete="off"
            onSubmit={submitFormHandler}
        >
            <Grid
                container
                maxWidth="md"
                textAlign="center"
                marginX="auto"
                direction="column"
                rowSpacing={2}
            >
                <FormElement
                    required={true}
                    label='Title'
                    name='title'
                    value={state.title}
                    onChange={inputChangeHandler}
                />

                <FormElement
                    required={!state.image}
                    label='Description'
                    name='description'
                    value={state.description}
                    onChange={inputChangeHandler}
                />

                <Grid item>
                    <FileInput
                        label="Image"
                        name="image"
                        onChange={fileChangeHandler}
                        required={!state.description}
                    />
                </Grid>

                <Grid item>
                    <Button type="submit" color="success" variant="contained">Create</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default AddNewPost;