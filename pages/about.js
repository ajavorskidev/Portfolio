import { Container } from 'semantic-ui-react'
import styles from '../styles/Home.module.css'
export default function AboutMe () {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1 className={styles.title}>
                About Me
            </h1>
            <Container text>
                <p className={styles.summary}>
                    Who would have known a simple cellular automata program, would be the catalyst for me to follow a lifelong quest and desire to be a software developer?
                    <br></br>Neither did I.
                    <br></br>
                    <br></br>
                    This program, which was built by me in my first high school programming class, has led me to program almost nonstop for the past five years, with personal projects and open source repositories becoming one of my favorite past times, only second to trying new food.
                    <br></br>
                    <br></br>
                    On to the more technical aspects,
                    I absolutely love working on APIs and back-end code using Node and Express, which allow me to flex my thinking muscles in finding secure and efficient paths of communication between the end client and databases.

                    So far in terms of knowledge of technologies and languages, I am proficient in Javascript; Node; Express; React/Redux; Git; and HTML5. I am also comfortable working with Passport; Mocha/Chai; C++; and PostgreSQL. Finally having dabbled a bit in Java; Heroku; Travis CI; and MaterialUI.
                    I'm always open to learning new technologies and languages that help me create efficient and improved projects!</p>
            </Container>
            </main>
        </div>
    )
}