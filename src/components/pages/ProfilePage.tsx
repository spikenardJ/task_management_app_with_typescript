import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import { Col } from "react-bootstrap";

const ProfilePage: React.FC = () =>{

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    if(!isAuthenticated){
        return <div>Not authenticated</div>
    }

    if(!user){
        return <div>No user profile</div>
    }

    getAccessTokenSilently().then(token => console.log('token', token))

    return(
        <PageLayout>
            <h2>Profile Page</h2>
            <Col><div id="profile-image">
                {user?.picture && <img id="profile-image" src={user.picture} alt={user.name} />}
                </div>
                <h3>{user.name}</h3>
                <div id="profile-info">
                    {
                        Object.keys(user).map((objKey, index) => 
                            <p key={index}><b>{objKey}</b>: {user[objKey]}</p>                            
                        )
                    }
                </div>
            </Col>
        </PageLayout>
    )
}

export default ProfilePage;