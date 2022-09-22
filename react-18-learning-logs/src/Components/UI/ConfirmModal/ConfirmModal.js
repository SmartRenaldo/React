import './ConfirmModal.css';
import Card from '../Card/Card';
import Backdrop from '../Backdrop/Backdrop';

const ConfirmModal = (props) => {
  return (
    <Backdrop>
      <Card className='confirmModalContainer'>
        <div className='confirmMsg'>
          <p>{props.confirmText}</p>
        </div>
        <div className='confirmButton'>
          <button onClick={props.onOk} className='ok'>
            OK
          </button>
          <button onClick={props.onCancel} className='cancel'>
            Cancel
          </button>
        </div>
      </Card>
    </Backdrop>
  );
};

export default ConfirmModal;
