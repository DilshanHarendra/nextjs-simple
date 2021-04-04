import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {increment} from "../store/actions/siteSettingsActions";
import {connect} from "react-redux";
import ShowCounter from "../component/ShowCounter";

function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
          <button onClick={()=>props.increment()}>Increment</button>
          <ShowCounter/>
      </main>


    </div>
  )
}
const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps,{increment}) (Home)
