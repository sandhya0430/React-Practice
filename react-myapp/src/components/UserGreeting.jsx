//import PropTypes from 'prop-types';

function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return<h2> welcome {props.username}</h2>
    // }
    // else{
    //     return<h2> pls loggin to continue</h2>
    // }
    const isLoggedIn=<h2 className="welcome-message"> welcome {props.username}</h2>
    const  logginPrompt=  <h2 className="loggin-prompt"> pls loggin to continue</h2>
    return(props.isLoggedIn? isLoggedIn:logginPrompt
  );
//   UserGreetings.propTypes={
//       isLoggedIn:PropTypes.bool,
//       username:PropTypes.string,
//   }
//     UserGreetings.defaultProps={
//         isLoggedIn:false,
//         username:"Guest",
//     }
}
export default UserGreeting;