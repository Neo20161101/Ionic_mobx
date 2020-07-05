import React, { useState } from 'react';
import {
	IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave
} from '@ionic/react';
import { observer, inject } from 'mobx-react';
import Tab4 from '../../tab4/index'


const Index: React.FC = observer((props: any) => {
	const [photoToDelete, setPhotoToDelete] = useState();

	useIonViewDidEnter(() => {
		console.log('ionViewDidEnter tab4');
	});

	useIonViewDidLeave(() => {
		console.log('ionViewDidLeave tab4');
	});

	useIonViewWillEnter(() => {
		console.log('ionViewWillEnter tab4');
	});

	useIonViewWillLeave(() => {
		console.log('ionViewWillLeave tab4');
	});
	return (
		<Tab4/>
	);
});

export default Index;
