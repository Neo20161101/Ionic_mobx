import React, { useState } from 'react';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton,
    IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonButton,
    useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave
} from '@ionic/react';
import { observer, inject } from 'mobx-react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, Photo } from '../../hooks/usePhotoGallery';



const Index: React.FC = observer((props: any) => {
    const { deletePhoto, photos, takePhoto } = usePhotoGallery();
    const [photoToDelete, setPhotoToDelete] = useState<Photo>();
    const hich = () => {
        props.history.push({
            pathname: '/tab2/details'
        })
    }
    useIonViewDidEnter(() => {
        console.log('ionViewDidEnter tab2');
    });

    useIonViewDidLeave(() => {
        console.log('ionViewDidLeave tab2');
    });

    useIonViewWillEnter(() => {
        console.log('ionViewWillEnter tab2');
    });

    useIonViewWillLeave(() => {
        console.log('ionViewWillLeave tab2');
    });
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Photo Gallery1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Photo Gallery1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton onClick={hich}>二级页面</IonButton>
                <IonGrid>
                    <IonRow>
                        {photos.map((photo, index) => (
                            <IonCol size="6" key={index}>
                                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.base64 ?? photo.webviewPath} />
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>

                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton onClick={() => takePhoto()}>
                        <IonIcon icon={camera}></IonIcon>
                    </IonFabButton>
                </IonFab>

                <IonActionSheet
                    isOpen={!!photoToDelete}
                    buttons={[{
                        text: 'Delete',
                        role: 'destructive',
                        icon: trash,
                        handler: () => {
                            if (photoToDelete) {
                                deletePhoto(photoToDelete);
                                setPhotoToDelete(undefined);
                            }
                        }
                    }, {
                        text: 'Cancel',
                        icon: close,
                        role: 'cancel'
                    }]}
                    onDidDismiss={() => setPhotoToDelete(undefined)}
                />
            </IonContent>
        </IonPage>
    );
});

export default Index;
