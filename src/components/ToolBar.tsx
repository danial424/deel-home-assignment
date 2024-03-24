import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

interface ToolBarProps {
    title: string
}

const ToolBar = (props: ToolBarProps) => {
    const { title } = props;
    return (
        <IonHeader>
            <IonToolbar color={"dark"}>
                <IonTitle>
                    {title}
                </IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default ToolBar;