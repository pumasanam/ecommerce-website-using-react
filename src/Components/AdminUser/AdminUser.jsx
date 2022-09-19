import React from 'react';
import "./AdminUser.scss";
import Navbar from '../Navbar/Navbar';

const AdminUser = () => {
  return (
    <>
    <Navbar/>
        <div className="users">
            <div className="user_list">
                <h4 className='h4'>Users</h4>

                <table border="1" style={{width:'100%',textAlign:"center"}}>
                    <thead>
                        <th>Sn</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </thead>

                    <tr>
                        <td>1</td>
                        <td>Ram Shahi</td>
                        <td>ramshahi@gmail.com</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Ram Shahi</td>
                        <td>ramshahi@gmail.com</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Ram Shahi</td>
                        <td>ramshahi@gmail.com</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Ram Shahi</td>
                        <td>ramshahi@gmail.com</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Ram Shahi</td>
                        <td>ramshahi@gmail.com</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </>
  );
};

export default AdminUser;
