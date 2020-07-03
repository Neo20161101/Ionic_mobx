import React, { useState } from 'react';
import {
	IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave
} from '@ionic/react';
import { observer, inject } from 'mobx-react';



const Index: React.FC = observer((props: any) => {
	const [photoToDelete, setPhotoToDelete] = useState();

	useIonViewDidEnter(() => {
		console.log('ionViewDidEnter event fired');
	});

	useIonViewDidLeave(() => {
		console.log('ionViewDidLeave event fired');
	});

	useIonViewWillEnter(() => {
		console.log('ionViewWillEnter event fired');
	});

	useIonViewWillLeave(() => {
		console.log('ionViewWillLeave event fired');
	});
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab4</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				{/*引入组件；例如：*/}
				{/*<Tab4/>*/}
			</IonContent>
		</IonPage>
	);
});

export default inject('config')(Index);
