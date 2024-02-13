import {Row, Button} from 'react-bootstrap';
import './css/leftBar.css'

function LeftBar() {
    return(
    <div className="leftBar fixed-left">
        <Row>
            <Button className="Button" id="calendarBtn">Календарь</Button>
        </Row>
        <Row>
            <Button className="Button" id="exspenceBtn">Расходы</Button>
        </Row>
        <Row>
            <Button className="Button" id="incomeBtn">Доходы</Button>
        </Row>
    </div>
    )
}

export default LeftBar;