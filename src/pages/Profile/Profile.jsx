import { useContext } from 'react'
import styles from './Profile.module.css'
import { AuthContext } from '../../providers/AuthProvider'
import { Link } from 'react-router-dom'
import ProfileSideBar from './ProfileSideBar/ProfileSideBar.jsx'
import ProfileHeader from './ProfileHeader/ProfileHeader.jsx'
import ProfileMainBlock from './ProfileMainBlock/ProfileMainBlock.jsx'

export default function Profile() {
    const { user, setUser } = useContext(AuthContext)

    function leave() {
        return localStorage.removeItem('user')
    }

    return (
        <>
        <h1>
            {JSON.parse(localStorage.getItem('user'))}
        </h1>
        <div>
            <Link to={'/'}>
                <button onClick={leave} className={styles.btn}>
                    Выйти из аккаунта
                </button>
            </Link>
        </div>
        <div className={styles.profile}>
            <ProfileSideBar />
            <div>
                <ProfileHeader/>
                <ProfileMainBlock  />
            </div>
        </div>
        </>
    )
}
