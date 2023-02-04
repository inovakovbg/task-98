import styles from "./LoginForm.module.css";






function LoginForm() {
    return (


        
            <form className={styles.form}>

               
                    <label htmlFor='username' className={styles.label} >username</label>
                    <input className={styles.input} id='username' type="text" placeholder="username" />
               
               
                    <label htmlFor='password' className={styles.label} >password</label>
                    <input className={styles.input} id='password' type="password" placeholder="password" />
              

             
                <input className={styles.submit} type="submit" value="Submit" />
           
            </form>

           


    


    );
}

export default LoginForm;
