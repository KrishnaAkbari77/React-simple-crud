import React from "react";
import Form from "./Form";
import Table from "./Table";

function Create() {
    const [users, setUsers] = React.useState([]);

    const [user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        employment: "",
        languages: [],
        favColor: "",
        file: "",
        id: ""
    });

    const [id, setId] = React.useState(null)

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (name === 'languages') {
            if (checked) {
                setUser({
                    ...user, languages: [...user.languages, value]
                })
            }
            else {
                setUser({
                    ...user,
                    languages: user.languages.filter((lang) => lang !== value)
                });
            }
        }
        else {
            setUser({
                ...user,
                id: users.length,
                [name]: type === "checkbox" ? checked : value
            });
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (id !== null) {
            users.splice(id, 1, user);
            setUsers([...users])
            setId(null)
        }
        else {
            setUsers([...users, user]);
        }

        setUser({
            firstName: "",
            lastName: "",
            email: "",
            date: "",
            employment: "",
            languages: [],
            file: "",
            favColor: ""
        })
    };

    console.log("users", users);

    //set data in localstorage
    React.useEffect(() => {
        localStorage.setItem("FormData", JSON.stringify(users));
    }, [users]);

    //delete event
    const handleDelete = (i) => {
        const updatedUsers = [...users];
        updatedUsers.splice(i, 1);
        setUsers(updatedUsers);
        console.log("User deleted", i);
    };

    //edit event
    const handleEdit = (i, index1) => {
        setUser({ ...i })
        setId(index1)
        console.log("Updated user", index1);

    };
    console.log();
    return (
        <>
            <Form postData={handleSubmit} user={user} change={handleChange} />
            <Table users={users} delet={handleDelete} edit={handleEdit} />
        </>
    );
}

export default Create;
