//import styles from './button.module.css';
function Button(){
    const styles = {
    backgroundColor:"blue",
    color:"white",
    padding:"10px 20px",
    borderRadius:"5px",
    border:"none",
    cursor:"pointer",

};
    // return (
    //     < button className={styles.button}>Click me</button>
    // );
     return (
        < button styles={styles}>Click me</button>
    );

}
export default Button;
