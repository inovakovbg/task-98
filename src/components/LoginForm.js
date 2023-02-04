import styles from "./LoginForm.module.css";
import React from "react";






function LoginForm() {
    return (



        <form className={styles.form}>


            <label htmlFor='username' className={styles.label} >username</label>
            <input className={styles.input} id='username' type="text" placeholder="username" />


            <label htmlFor='password' className={styles.label} >password</label>
            <input className={styles.input} id='password' type="password" placeholder="password" />

            <button className={styles.submit} type="submit" > Submit</button>





        </form>







    );
}

export default LoginForm;
