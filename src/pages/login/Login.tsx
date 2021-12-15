import {
    IonContent,
    IonHeader,
    IonPage,
    IonInput,
    IonItem,
    IonList,
    IonItemDivider,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonButton,
    IonText
} from '@ionic/react';
import { useState } from 'react';
import { accessibilityOutline, arrowForwardCircleOutline, handLeftOutline, logoBitcoin, pin, star } from 'ionicons/icons';

import './Login.css';
import { Link } from 'react-router-dom';

const logoPath = "https://pararockeros.com/wp-content/uploads/2021/12/chainec-02.png";


const Login: React.FC = () => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    return (
        <IonPage>
            <IonContent color="light" fullscreen>
                <IonHeader collapse="condense">
                </IonHeader>
                <div className="container">
                    <img className="logo-login" src={logoPath} />
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>BIENVENIDO</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <IonList>
                                <IonItem>
                                    <IonInput
                                        value={email}
                                        type="email"
                                        placeholder="Email"
                                        onIonChange={(e) => setEmail(e.detail.value!)}
                                        clear-input={true}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonInput
                                        value={password}
                                        type="password"
                                        placeholder="********"
                                        onIonChange={(e) => setPassword(e.detail.value!)}
                                        clear-input={true}
                                    />
                                </IonItem>
                                <IonItemDivider class="bg-white"></IonItemDivider>
                            </IonList>

                            <Link to="/home">
                                <IonButton size="large" color="warning">
                                    <IonIcon slot="start" icon={logoBitcoin} />
                                    INGRESAR
                                </IonButton>
                            </Link>
                        </IonCardContent>
                    </IonCard>
                    <IonIcon slot="start" color="medium" icon={handLeftOutline} /> <br />
                    <IonText color="medium"> Crea una cuenta gratuita</IonText> <br />
                    <IonButton size="small" color="dark">
                        <IonIcon slot="start" icon={arrowForwardCircleOutline} />
                        Registrarme
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
