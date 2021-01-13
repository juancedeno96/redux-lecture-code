import React from 'react';
import {connect} from 'react-redux'
const Profile = props => {
console.log(props)
    return (
        <main className='profile'>
            <h1>{props.userReducer.user.username}</h1>
            <h3>{props.userReducer.user.age}</h3>
            <h3>{props.userReducer.user.email}</h3>
        </main>
    )
}
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Profile);