import Link from 'next/link';
import Modal from 'react-modal';

import { ResponseProps } from './type';

const ProductModal: React.FC<ResponseProps> = ({
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
          top: '80px',
          right: '0',
          maxWidth: '250px',
          margin: '0 auto',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='h-max w-full flex-shrink-0 rounded-2xl border-2 border-secondary-gray bg-white drop-shadow-2xl md:h-max'
    >
      <div className='w-full flex flex-col px-4 py-4'>
        <Link href='#' className='text-secondary px-3 py-2'>
          Profile
        </Link>
      </div>
    </Modal>
  );
};

export default ProductModal;
