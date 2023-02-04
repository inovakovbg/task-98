import styles from "./LoginForm.module.css";






function LoginForm() {
    return (


        <div>
            <form className={styles.form}>
                <label className={styles.label}>Login
              
                
                <input className={styles.input}  id='username' type="text" placeholder="username" />
                            
                <input className={styles.input} id='password' type="password" placeholder="password" />
              
                <input className={styles.submit} type="submit" value="Submit" />
                </label>
            </form>

            <hr />


        </div>


    );
}

export default LoginForm;
