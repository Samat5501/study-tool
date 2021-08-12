import React, { useState } from 'react'
import { TextField } from '../../TextField'
import { CustomButton } from '../../CustomButton';
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import routes from '../../routes'
import { login_user } from '../../store/actions';
const Login = () => {
    const dispatch = useDispatch()

    const [inEmail, setInEmail] = useState('')
    const [inPassword, setInPassword] = useState('')
    
    const success = useSelector((state) => state.success)
	const localUsers = useSelector((state) => state.localUsers)


    return (
        <div className="sign">
        <div>
        <TextField
            value={inEmail}
            onChange={(e) => setInEmail(e.target.value)}
            placeholder="Enter the Email"
            name="email" type="email"
          />
           {/* {errors.email && <p className="error">{errors.email}</p>} */}
        </div>
        <div>
        <Space direction="vertical">
            <Input.Password
            className="password-inp"
            value={inPassword}
            onChange={(e) => setInPassword(e.target.value)}
            placeholder="At least 8 characters long"
            name="password"
            type="password" />
          </Space>
          {/* {errors.password && <p className="error">{errors.password}</p>} */}
        </div>
        <CustomButton onClick={() => {
							dispatch(login_user({ inEmail, inPassword }))
                            }} className='.buttonSign'>Sign In</CustomButton>
        <h3>Don't have an account? <Link to={routes.sign_up}>Sign Up</Link> </h3>
        </div>
    )
}

export default Login
