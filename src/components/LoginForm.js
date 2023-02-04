import styles from "./LoginForm.module.css";






function LoginForm() {
    return (


        <div className="main">
            <form className={styles.form}>

                <label htmlFor='username'className={styles.label} >username
                                         
                <input className={styles.input}  id='username' type="text" placeholder="username" />
                </label> 
                
                <label htmlFor='password' className={styles.label} >password  
             
                <input className={styles.input} id='password' type="password" placeholder="password" />
                </label>    

                <input className={styles.submit} type="submit" value="Submit" />
               
            </form>

            <hr />


        </div>


    );
}

export default LoginForm;
