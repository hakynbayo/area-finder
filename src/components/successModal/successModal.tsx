import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Modal from 'react-modal';

import { ResponseProps } from './type';

const SuccessModal: React.FC<ResponseProps> = ({
  handleCloseModal,
  isOpen,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'auto',
        },
        content: {
          outline: 'none',
          position: 'absolute',
          top: '30%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Center horizontally and vertically
          maxWidth: '350px',
          width: '80%', // Adjust width as needed
          margin: '0 auto',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='w-full flex-shrink-0 rounded-2xl bg-white drop-shadow-2xl md:h-max'
    >
      <div className='w-full flex items-center rounded-2xl justify-center text-[#28a745] bg-[#05420514] gap-4 px-4 py-4'>
        <IoMdCheckmarkCircleOutline />
        Review Submitted
      </div>
    </Modal>
  );
};

export default SuccessModal;
