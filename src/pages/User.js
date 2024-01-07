import React, { useEffect, useState } from 'react';
import { showUserData, addUser } from '../services/Api'
const User = () => {
    let [userData, setUserData] = useState([]);

    let [userObj, setUserObj] = useState({
        "UserId":"",
        "Name": "",
        "Email": "",
        "Password": "",
        "ContactNo": "",
        "Role": ""
    })
    let [isLoader, setIsLoader] = useState(true);
    useEffect(() => {
        getAllUserData();
    }, []);

    const getAllUserData = () => {
        showUserData().then((data) => {
            setUserData(data)
            setIsLoader(false);
        })

    }
    const addAllUser = () => {
        try {
            addUser(userObj).then((data) => {
                debugger;
                if (data.result) {
                    debugger;
                    alert("User Added Successfully");
                    getAllUserData();
                } else {
                    alert(data.message);
                }
            })
        } catch (error) {
            alert(error.code)
        }
    }


    const changeFormValue = (event, key) => {
        setUserObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }

    const reset = () => {
        setUserObj({
            "UserId": 0,
            "Name": "",
            "Email": "",
            "Password": "",
            "ContactNo": "",
            "Role": ""
        })
    }

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='card'>
                            <div className='card-header bg-success'>
                                User List
                            </div>
                            <div className='card-body'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Sr No</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>ContactNo</th>
                                            <th>Role</th>

                                        </tr>
                                    </thead>
                                    {
                                        isLoader && <tbody>
                                            <tr>
                                                <td colSpan={9} className='text-center'>
                                                    <div class="spinner-border text-muted"></div>
                                                    <div class="spinner-border text-primary"></div>
                                                    <div class="spinner-border text-success"></div>
                                                    <div class="spinner-border text-info"></div>
                                                    <div class="spinner-border text-warning"></div>
                                                    <div class="spinner-border text-danger"></div>
                                                    <div class="spinner-border text-secondary"></div>
                                                    <div class="spinner-border text-dark"></div>
                                                    <div class="spinner-border text-light"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    }
                                    {!isLoader && <tbody>
                                        {
                                            userData && userData.map((item, index) => {
                                                return (<tr>
                                                    <td>{index + 1} </td>
                                                    <td> {item.Name}</td>
                                                    <td> {item.Email} </td>
                                                    <td> {item.Password}</td>
                                                    <td> {item.ContactNo} </td>
                                                    <td> {item.Role}</td>

                                                    <td><button className='btn btn-sm btn-primary'> Edit</button> </td>
                                                    <td> <button className='btn btn-sm btn-danger'> Delete</button></td>
                                                </tr>)
                                            })
                                        }

                                    </tbody>
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card'>
                            <div className='card-header bg-success'>
                                Add  Master
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <input type='text' className='form-control' onChange={(event) => { changeFormValue(event, 'Name') }} placeholder='Enter User Name' />
                                    </div>
                                    <div className='col-6'>
                                        <input type='text' className='form-control ' onChange={(event) => { changeFormValue(event, 'Email') }} placeholder='Enter Email' />

                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-6'>
                                        <input type='text' className='form-control' onChange={(event) => { changeFormValue(event, 'Password') }} placeholder='Enter Password' />
                                    </div>
                                    <div className='col-6'>
                                        <input type='text' className='form-control ' onChange={(event) => { changeFormValue(event, 'ContactNo') }} placeholder='Enter Contact No' />

                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-6'>
                                        <input type='text' className='form-control' onChange={(event) => { changeFormValue(event, 'Role') }} placeholder='Enter Role' />
                                    </div>


                                    <div className='row mt-2'>
                                        <div className='col-6'>
                                            <button className='btn btn-secondary' onClick={reset}>Reset</button>&nbsp;
                                            <button className='btn btn-primary ' onClick={addAllUser}>Add User</button>

                                            {/* {
                                            userObj.statusId !== 0 && <button className='btn btn-sm btn-warning  p-2' onClick={updateMaster}> Update Master</button>
                                        } */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;