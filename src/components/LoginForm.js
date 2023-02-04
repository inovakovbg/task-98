import styles from "./LoginForm.module.css";






function LoginForm() {
    return (


        <div>
            <form className={styles.form}>

                <div>
                    <label htmlFor='username' className={styles.label} >username</label>
                    <input className={styles.input} id='username' type="text" placeholder="username" />
                </div>

                <div>
                    <label htmlFor='password' className={styles.label} >password</label>
                    <input className={styles.input} id='password' type="password" placeholder="password" />
                </div>

                <div>
                <input className={styles.submit} type="submit" value="Submit" />
                </div>
            </form>

           


        </div>


    );
}

export default LoginForm;
