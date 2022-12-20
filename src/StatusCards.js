import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '@mui/material/Card';

import { faCalendar, faDollarSign, faClipboardList, faComments } from '@fortawesome/free-solid-svg-icons';



export function StatusCardsList() {
    const cardData = [{
        cardHead: "EARNINGS (MONTHLY)",
        cardHeadClr: "var(--cardBlue)",
        cardValue: "$40,000",
        cardIcon: faCalendar,
    },

    {
        cardHead: "EARNINGS (ANNUAL)",
        cardHeadClr: "var(--cardGreen)",
        cardValue: "$215,000",
        cardIcon: faDollarSign,
    },

    {
        cardHead: "TASKS",
        cardHeadClr: "var(--cardSkyBlue)",
        cardValue: "50%",
        cardIcon: faClipboardList,
    },

    {
        cardHead: "PENDING REQUESTS",
        cardHeadClr: "var(--cardYellow)",
        cardValue: "18",
        cardIcon: faComments,
    }]

    return (
        <div className='card-list'>

            {cardData.map((data, index) => (
                <StatusCards key={index} cardData={data} />

            ))}
        </div>

    )
}

export function StatusCards({ cardData }) {

    return (
        <div>
            <Card style={{ borderLeft: '5px solid', borderLeftColor: cardData.cardHeadClr }} className='status-card'>

                <div>
                    <h6 style={{ color: cardData.cardHeadClr, margin: 0 }}>{cardData.cardHead}</h6>
                    <h4 className='card-value'>{cardData.cardValue}</h4>

                </div>

                <div className='card-icon'>

                    <FontAwesomeIcon icon={cardData.cardIcon} />

                </div>

                   </Card>

                </div >
    );
}