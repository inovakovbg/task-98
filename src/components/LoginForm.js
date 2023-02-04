import styles from "./LoginForm.module.css";






function LoginForm() {
    return (


        <div className="main">
            <form className={styles.form}>
                <label className={styles.label} for='username'>username:
                                         
                <input className={styles.input}  id='username' type="text" placeholder="username" />
                {/* </label> 
                
                <label className={styles.label} for='password'>password         */}
             
                <input className={styles.input} id='password' type="password" placeholder="password" />
                </label>

                <input className={styles.submit} type="submit" value="Submit" />
               
            </form>

            <hr />


        </div>


    );
}

export default LoginForm;
