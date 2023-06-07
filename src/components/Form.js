import React from "react";

export default function Form(props) {
    const { postData, user, change } = props

    return (
        <div className="container">
            <form className="create-form" onSubmit={postData}>
                <h2>Employee Deatils</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={change}
                    name="firstName"
                    value={user.firstName || ''}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={change}
                    name="lastName"
                    value={user.lastName || ''}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={change}
                    name="email"
                    value={user.email || ''}
                />
                <br />
                <label htmlFor="date">Birthday : </label>
                <input
                    type="date"
                    onChange={change}
                    name="date"
                    value={user.date || ''}
                />


                <fieldset>
                    <legend>Current employment status</legend>
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={user.employment === "unemployed"}
                        onChange={change}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />

                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={user.employment === "part-time"}
                        onChange={change}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />

                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={user.employment === "full-time"}
                        onChange={change}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <br />
                <label htmlFor="languages">languages : </label>
                <input
                    type="checkbox"
                    onChange={change}
                    id="languages"
                    name="languages"
                    checked={user.languages?.includes('english')}
                    value='english'
                /><label>english</label>
                <input
                    type="checkbox"
                    id="languages"
                    onChange={change}
                    name="languages"
                    checked={user.languages?.includes('gujarati')}
                    value='gujarati'
                /><label>gujarati</label>
                <input
                    type="checkbox"
                    onChange={change}
                    id="languages"
                    name="languages"
                    checked={user.languages?.includes('hindi')}
                    value='hindi'
                /><label>hindi</label>

                <br />
                <label htmlFor="file">Profile Pic :</label>
                <input
                    type="file"
                    onChange={change}
                    name="file"
                    value={user.file || ''}
                />

                <br />
                <label htmlFor="favColor">What is your favorite color?</label>
                <select
                    id="favColor"
                    value={user.favColor || ""}
                    onChange={change}
                    name="favColor"
                >
                    {["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"].map(
                        (color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        )
                    )}
                </select>
                <button class="delete-btn btn">Submit</button>   
            </form>
        </div>
    )

}
