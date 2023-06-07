import React from 'react'

function Table(props) {

    return (
        <>
            <table >
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Birthday</th>
                <th>employment</th>
                <th>languages</th>
                <th>Profile </th>
                <th>fav color</th>
                <th>delete</th>
                <th>edit</th>
                {props.users && props.users.map((l, i) => {
                    {
                        return (
                            <tr>
                                <td>{l.firstName}</td>
                                <td>{l.lastName}</td>
                                <td>{l.email}</td>
                                <td>{l.date}</td>
                                <td>{l.employment}</td>
                                <td>{l.languages.join(' + ')}</td>
                                <td><img src={l.file} alt="Profile" /></td>
                                <td>{l.favColor}</td>
                                <td><button type='button' className='delete-btn' onClick={() => props.delet(i)}>delete</button></td>
                                <td><button type='button' className='edit-btn' onClick={() => props.edit(l,i)}>edit</button></td>
                            </tr>
                        );
                    }
                })}
            </table>
        </>
    )

}

export default Table;