import styles from './Button.module.css'



function Button() {

    /* inline-styles//  const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",

    }  
    
    return(<button style={styles}>Click me</button>)
    */

    return(<button className={styles.button}>Click me</button>)
}
 

export default Button