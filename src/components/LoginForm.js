import styles from "./LoginForm.module.css";






function LoginForm() {
    return (


        <div>
            <form className={styles.form}>
                <label className={styles.label}>username
              
                
                <input className={styles.input}  id='username' type="text" placeholder="username" />
                <label className={styles.label}>password</label>        
                <input className={styles.input} id='password' type="password" placeholder="password" />
                

                <input className={styles.submit} type="submit" value="Submit" />
                </label>
            </form>

            <hr />


        </div>


    );
}

export default LoginForm;
