import styles from "./LoginForm.module.css";






function LoginForm() {
    return (


        <div className="main">
            <form className={styles.form}>
                <label className={styles.label} htmlfor='username'>username</label> 
                                         
                <input className={styles.input}  id='username' type="text" placeholder="username" />
                
                
                <label className={styles.label} htmlfor='password'>password</label>      
             
                <input className={styles.input} id='password' type="password" placeholder="password" />
               

                <input className={styles.submit} type="submit" value="Submit" />
               
            </form>

            <hr />


        </div>


    );
}

export default LoginForm;
