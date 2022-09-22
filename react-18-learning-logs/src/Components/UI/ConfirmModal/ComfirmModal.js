import './ConfirmModal.css';
import Card from '../Card/Card';

const ConfirmModal = (props) => {
  return (
    <Card className='confirmModalContainer'>
      <div className='confirmMsg'>
        <p>Do you want to delete?</p>
      </div>
      <div className='confirmButton'>
        <button className='ok'>OK</button>
        <button className='cancel'>Cancel</button>
      </div>
    </Card>
  );
};

export default ConfirmModal;
